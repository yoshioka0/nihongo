// constants in config.js

//To prevent the page to be embedded
if (window.self !== window.top) {
    // Prevent iframe embedding
    document.body.innerHTML = "<h1>Embedding is not allowed.</h1>";
    setTimeout(() => {
        window.top.location = window.self.location;
    }, 1000); // Redirect after 1 second
}

function loadScript(url, onLoad, onError) {
    Object.assign(document.head.appendChild(document.createElement("script")), {
        type: "text/javascript", src: url, onload: onLoad, onerror: onError
    });
}
loadScript("/nihongo/debugger-of.js", 
    () => console.log("Debugger script loaded!"), 
    () => (console.warn("Debugger script failed! Redirecting..."), window.location.href = "/nihongo/blocked.html")
);


// Function to get the access token from localStorage
function getJWTToken() {
    return localStorage.getItem('accessToken');
}

// Function to get the refresh token from cookies
function getRefreshToken() {
    const value = `; ${document.cookie}`;
    const parts = value.split('; refreshToken=');
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Function to decode JWT token and extract payload
function decodeJWT(token) {
    if (!token) return null; // Return null if no token is provided

    try {
        const base64Url = token.split('.')[1];
        if (!base64Url) throw new Error('Invalid token format');

        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('');

        return JSON.parse(decodeURIComponent(jsonPayload));
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
    }
}

// Function to check if the token is expired
function isTokenExpired(token) {
    const decoded = decodeJWT(token);
    if (!decoded || !decoded.exp) return true; // Consider expired if decoding fails or no expiration

    return Date.now() >= decoded.exp * 1000;
}

// Function to refresh the access token using the refresh token
async function refreshAccessToken() {
	if (window.location.pathname !== '/nihongo/auth/'  && window.location.pathname !== '/nihongo/') {
		document.body.innerHTML = ` <div class="loader-container"> <div class="loader"></div> <span>Verifying...</span> </div>	`;
	}
	
    try {
        const response = await apiRequest('/refresh-token', {
            method: 'POST',
            credentials: 'include', //Allows sending HttpOnly cookies
        });

        if (!response.ok) {
            console.log('Failed to refresh token');
            return null;
        }

        const data = await response.json();
        localStorage.setItem('accessToken', data.token);
        return data.token;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return null;
    }
}

// Function to check if the user is authenticated
async function checkAuthentication() {
    let token = getJWTToken();  
    // Check if the token is missing or expired
    if (!token || isTokenExpired(token)) {
        console.log('Access token expired or missing. Attempting to refresh...');
     //   showPopupMessage('Credentials expired or missing.');
        // Try to get a new access token using the refresh token
        token = await refreshAccessToken();
		if (!token) {
		    //showPopupMessage('404: Credentials refresh failed.');
			console.log('Authentication failed: No valid token found');
		    redirect();
		    return; // Prevent further execution
		} else {
		    showPopupMessage('Credentials refreshed successfully.');
		    await delay(1000);
		    location.reload(); 
		}
    }

    try {  	
        	const response = await apiRequest(`/validate-token`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.status === 403) {
            console.log('Token is blacklisted');
            logout();
            return;
        }

        const result = await response.json();

        if (!response.ok || !result.userId) {
        	await clearAllData();  
			location.reload();       
            throw new Error('Invalid token');
        }
		
        console.log('User is authenticated', result.userId);
        
        if (window.location.pathname === '/nihongo/auth/') {
       	showPopupMessage('Already logged in!');
       	 alert(`Already logged in!`);
            window.location.href = '/nihongo/';         
    } 

    } catch (error) {
        console.error('Authentication failed:', error);
        redirect();
    }
}

function redirect() {
    if (window.location.pathname !== '/nihongo/auth/'  && window.location.pathname !== '/nihongo/') {
			window.location.href = '/nihongo/unauthorized.html';
    }
}

function home() {
    window.location.href = '/nihongo';  // Redirect to the homepage (root URL)
}

// Logout user and call the logout endpoint on the server to blacklist the token
async function logout() { 
	document.body.innerHTML = ` <div class="loader-container"> <div class="loader"></div> <span>Logging Out...</span> </div>	`;
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        alert("No active session found. Please clear cookies and try again.");
        await clearAllData();
        location.reload(); 
        return;
    }

    try {
    	
        const response = await apiRequest('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            credentials: 'include' // Ensures cookies are sent
        });

        if (!response.ok) {
            throw new Error('Logout request failed');
        }

        const data = await response.json();
        showPopupMessage2?.(data.message || "Logged out successfully"); // Use optional chaining

        // Clear tokens, session data, cookies, IndexedDB 
        await clearAllData();

        setTimeout(() => {
            window.location.href = '/nihongo/auth/logout.html';
        }, 1500); // Delay for message visibility

    } catch (error) {
        console.error('Error during logout API request:', error);
        await clearAllData(); // Clear even on failure
        alert("Error: Unable to reach the server. Local credentials have been cleared. Please manually clear site cookies and data to ensure a complete logout.");
        location.reload();        
    }    
}



// Call this function when the page loads to ensure authentication status is checked
document.addEventListener('DOMContentLoaded', checkAuthentication);


// Helper Function ⭐⭐
async function clearAllData() {
    // Clear localStorage
    localStorage.clear();
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Clear all cookies (Loop through them)
    document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, "")
            .replace(/=.*/, "=; Path=/; Max-Age=0; domain=" + location.hostname);
    });

    // Clear IndexedDB (browser-specific, could leave data in some browsers)
    if (window.indexedDB) {
        const request = indexedDB.deleteDatabase('your-database-name');
        await new Promise((resolve, reject) => {
            request.onsuccess = resolve;
            request.onerror = reject;
        });
    }

    // Clear Service Worker cache (if applicable)
    if (navigator.serviceWorker) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        registrations.forEach(registration => {
            registration.unregister();
            console.log('Service Worker unregistered');
        });
    }    
}
    




// Function to show a popup message with a progress bar
// Maximum number of pop-ups allowed at once
const MAX_POPUPS = 4;

function showPopupMessage(message, duration = 3000) {
    const popup = document.createElement('div');
    popup.classList.add('popup-notification');

    // Create progress bar wrapper
    const progressBarWrapper = document.createElement('div');
    progressBarWrapper.classList.add('progress-bar-wrapper');
    popup.appendChild(progressBarWrapper);

    // Create the progress bar inside the wrapper
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBarWrapper.appendChild(progressBar);

    // Add the message to the popup
    const messageText = document.createElement('div');
    messageText.textContent = message;
    popup.appendChild(messageText);

    // Append the popup to the body
    document.body.appendChild(popup);

    // Calculate vertical position for stacking (using the number of existing pop-ups)
    const allPopups = document.querySelectorAll('.popup-notification');
    const popupCount = allPopups.length;  // Total number of currently visible pop-ups
    const verticalOffset = 80; // Vertical space between pop-ups (adjust as needed)

    // Stack the new popup slightly above the previous one
    popup.style.bottom = `${popupCount * verticalOffset}px`;     

    // If the number of pop-ups exceeds the limit, remove the oldest one
    if (popupCount > MAX_POPUPS) {
        const firstPopup = allPopups[0];
        firstPopup.remove();
    }

    // Show the popup
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    // Start filling the progress bar
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 100 / (duration / 100);
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 100);

    // Hide the popup after the specified duration
    setTimeout(() => {
        popup.classList.remove('show');
        // Remove the popup from the DOM after animation
        setTimeout(() => popup.remove(), 300);
    }, duration);


}



function showPopupMessage2(message, duration = 3000, background = '#ff4b5c') {
    let alertBox = document.getElementById('custom-alert');
    
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = 'custom-alert';
        document.body.appendChild(alertBox);
        
        document.head.insertAdjacentHTML('beforeend', `<style>
            #custom-alert {
                position: fixed; top: -50px; left: 50%; transform: translateX(-50%);
                background: ${background}; color: white; padding: 15px 20px;
                border-radius: 5px; font-size: 16px; font-weight: bold;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
                transition: top 0.5s ease-in-out;
                z-index: 9999; min-width: 250px; text-align: center;
            }
        </style>`);
    }

    // Reset transition before changing styles to restart animation
    alertBox.style.transition = 'none';
    alertBox.style.top = "-200px";
    alertBox.offsetHeight; // Force a reflow to apply the reset
    
    // Now apply new styles
    alertBox.innerText = message;
    alertBox.style.background = background; // Update background if needed
    alertBox.style.transition = 'top 0.5s ease-in-out'; // Restore transition
    setTimeout(() => { alertBox.style.top = "10px"; }, 10); // Slide down

    // Hide the alert after duration
    clearTimeout(alertBox.dismissTimer);
    alertBox.dismissTimer = setTimeout(() => {
        alertBox.style.top = "-200px";
    }, duration);
}

// Example usage (Default: 3sec)
//showPopupMessage2("This is a custom alert!", 4000, 'green');
