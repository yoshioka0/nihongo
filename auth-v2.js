// constants in config.js

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
    try {
        const response = await apiRequest('/refresh-token', {
            method: 'POST',
            credentials: 'include', //Allows sending HttpOnly cookies
        });

        if (!response.ok) {
            console.error('Failed to refresh token');
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
        showPopupMessage('Credentials expired or missing.');
        // Try to get a new access token using the refresh token
        token = await refreshAccessToken();
        if (token){
        showPopupMessage('Credentials refreshed successfully.');
        await delay(1000);
        location.reload();
        }
		showPopupMessage('404: Credentials refresh failed..');
        // If we still don't have a valid token after refresh, log out
        if (!token) {
            console.log('Authentication failed: No valid token found');
            //showPopupMessage('No Luck! Logging Out...');
            logout();
            return;
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
            throw new Error('Invalid token');
        }

        console.log('User is authenticated', result.userId);

    } catch (error) {
        console.error('Authentication failed:', error);
        logout();
    }
}


// Logout user and call the logout endpoint on the server to blacklist the token
async function logout() { 
    const accessToken = localStorage.getItem("accessToken");
	if (accessToken) {
		   try {
		       const response = await apiRequest('/api/logout', {
		            method: 'POST',
		            headers: {
		                'Content-Type': 'application/json',
		                'Authorization': `Bearer ${accessToken}`,
		            },
		            body: JSON.stringify({ accessToken }),
		            credentials: 'include', 
		        });
		
		        if (!response.ok) {
		            throw new Error('Logout request failed');
		        }
		
		    } catch (error) {
		        console.error('Error during logout API request:', error);
		    }
	}else{
		console.log('Unauthorized');
		}
    // Clear tokens and session data
    localStorage.removeItem("accessToken");
    console.log("Token Deleted");
    //document.cookie = "refreshToken=; Path=/; Max-Age=0";
    localStorage.removeItem('chattedUsers');

    // Handle UI change for logged-out users
    if (window.location.pathname === '/nihongo/' || window.location.pathname === '/nihongo/auth/') {
       	showPopupMessage('Unauthorized: Certain features are not available.');
    } else {
        window.location.href = '/nihongo/unauthorized.html';
    }
}

loadCloudflareScript();
// Function to dynamically load the Cloudflare script
function loadCloudflareScript() {
    const script = document.createElement('script');
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"; // Cloudflare Turnstile script
    script.async = true;
    script.defer = true;
    script.onload = () => console.log("✅ Cloudflare script loaded.");
    script.onerror = () => console.error("❌ Failed to load Cloudflare script.");
    document.head.appendChild(script);
}


// Call this function when the page loads to ensure authentication status is checked
document.addEventListener('DOMContentLoaded', checkAuthentication);


//Helper Function ⭐⭐

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
    const verticalOffset = 100; // Vertical space between pop-ups (adjust as needed)

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


