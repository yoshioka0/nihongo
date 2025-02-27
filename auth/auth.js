//constants in config.js

// Define the delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function renderTurnstile(turnstileId) {
    const containerElement = document.getElementById(turnstileId);
    if (!containerElement) {
        console.error(`❌ Element with ID "${turnstileId}" not found.`);
        return;
    }
    if (containerElement.hasChildNodes()) {
        console.log(`⚠️ Turnstile already rendered for ${turnstileId}`);
        return;
    }
    turnstile.ready(() => {
        turnstile.render(containerElement, {
            sitekey: "0x4AAAAAAA1LZ_hIj3lnMBRX",
            callback: (token) => {
                console.log(`✅ Turnstile verified`);                
            }
        });
        console.log(`Turnstile rendered for ${turnstileId}`);
    });
}

const loginWindow = document.querySelector('.modal');

// Google OAuth
// Google OAuth
async function handleCredentialResponse(response) {
    showPopupMessage2('Tip: To keep your session longer allow 3rd party cookies for this site.', 5000, 'green');
    loginWindow.innerHTML = `<div class="loader-container"> <div class="loader"></div> <span>Signing In...</span> </div>`;

    const token = response.credential; // Google ID token
    try {
        const res = await apiRequest("/auth/google", {
            method: "POST",
            credentials: "include",  // Ensures cookies are sent
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,  // Add the token in the Authorization header
            },
            body: JSON.stringify({ token: token }),  // Alternatively, pass it in the body
        });
        
        const data = await res.json();
        if (data.success) {
            // Store JWT and other user details
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("userEmail", data.user.email);
            localStorage.setItem("userProfilePic", data.user.profilePicture);
            localStorage.setItem("username", data.user.username);

            // Show success feedback
            playAudio('/nihongo/media/winxp.mp3');
            await showAlert('Login successful! 🎉', `Welcome ${data.user.username}!`);

            // Optionally, redirect to the dashboard or another page
            window.location.href = "/nihongo/";  // or any other page
        } else {
            // Show error feedback if something went wrong
            await showAlert('Login failed: ' , data.error);
            location.reload();           
        }
    } catch (err) {
        console.error("Error:", err);
        loginWindow.innerHTML = `<div class="loader-container"> <div class="loader"></div> <span>🔴 An error has occurred. Please try again. The page will refresh in 10 seconds. </span> </div>`;
        await delay(10000);
        location.reload();
    }
}


window.onload = function () {
    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID, // Make sure to use your actual client ID here
        callback: handleCredentialResponse,
    });
   google.accounts.id.renderButton(
  document.getElementById("buttonDiv"),
  {
    theme: "filled_blue", // Button style (blue background)
    size: "large", // Button size (larger button)
    shape: "pill", // Rounded button
    logo_alignment: "left", // Align Google logo to the left
    width: "", // Adjust the button width based on content
  }
);
    google.accounts.id.prompt(); // Show One Tap dialog if available
};


// Auth0
// Plan for future

// General password toggle functionality
function togglePasswordVisibility(event) {
    const passwordField = event.target.previousElementSibling; // Target the input field
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Show password
        event.target.classList.remove('fa-eye'); // Change icon to 'eye slash'
        event.target.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password'; // Hide password
        event.target.classList.remove('fa-eye-slash'); // Change icon back to 'eye'
        event.target.classList.add('fa-eye');
    }
}


// login and sign-up text listeners
const loginHere = document.getElementById("login-here");
const signupHere = document.getElementById("signup-here");
    
// Attach the event listener to both login and signup eye icons
document.querySelectorAll('.password-wrapper i').forEach(icon => {
    icon.addEventListener('click', togglePasswordVisibility);
});

loginHere.addEventListener("click", () => {
    document.getElementById("login-modal").style.display = "flex";
    document.getElementById("signup-modal").style.display = "none";
    document.getElementById('login-username').focus(); // Focus on the first input field
});
signupHere.addEventListener("click", () => {
    document.getElementById("signup-modal").style.display = "flex";
    document.getElementById("login-modal").style.display = "none";
    document.getElementById('signup-username').focus();
});

// Helper functions
const isValidUsername = (username) => /^[a-zA-Z0-9_-]{3,15}$/.test(username);
const isStrongPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#^%*?&])[A-Za-z\d@$!%#^*?&]{8,20}$/.test(password);

// New User Creation
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const signupForm = document.getElementById('signup-form');
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const keepLoggedIn = document.getElementById('keep-logged-in-signup').checked; // Check if selected
    const errorMessage = document.getElementById('ErrorMessage');
    errorMessage.textContent = '';

    if (!isValidUsername(username)) {
        showPopupMessage('Username must be 3-15 characters and contain only letters, numbers, underscores, or hyphens.', 5000);
        errorMessage.textContent = 'Username must be 3-15 characters and contain only letters, numbers, underscores, or hyphens.';
        return;
    }

    if (!isStrongPassword(password)) {
        showPopupMessage('Password must be between 8 to 20 characters, include uppercase, lowercase, a number, and a special character. (Aa1@)', 5000);
        return;
    }
    
      if (password !== confirmPassword) {
      	showPopupMessage('Passwords do not match!');
  	    errorMessage.textContent = "Passwords do not match!";
    return;
      }

    showLoadingSpinner(signupForm, 'Creating Account...');
    renderTurnstile("turnstile1") ;
    try {
        const turnstileResponse = turnstile.getResponse(turnstile1);
        if (!turnstileResponse) {
            showPopupMessage('Please complete the captcha.');
            hideLoadingSpinner(signupForm);
            return;
        }
    	
        const response = await apiRequest(`/auth/create-user`, {
            method: 'POST',
            credentials: "include",  // Ensures cookies are sent
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, turnstileResponse })
        });

        const data = await response.json();
        hideLoadingSpinner(signupForm);

        if (response.ok) {
        	const { accessToken, refreshToken } = data;
			localStorage.setItem("accessToken", accessToken);
		    if (keepLoggedIn) {
				// Store refresh token in a cookie (HttpOnly and Secure flags(in https environment) for better security)
				//document.cookie = `refreshToken=${refreshToken}; Path=/; Max-Age=604800;`;
			}

        	showPopupMessage2(`User created successfully! (${username})`,3000,'green');
            await showAlert('Success! 🎉', `User created successfully! (${username})`);
            window.location.href = '/nihongo/';
        } else {
            showPopupMessage(data.error || 'Something went wrong!');
            turnstile.reset(turnstile1);
        }
    } catch (error) {
        console.error('Error:', error);
        hideLoadingSpinner(signupForm);
    }
});

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const loginForm = document.getElementById('login-form');
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const keepLoggedIn = document.getElementById('keep-logged-in').checked; // Check if selected

    if (!username || !password) {
        showPopupMessage('Please enter both username and password.');
        return;
    }

    showLoadingSpinner(loginForm, 'Logging In...');
	renderTurnstile("turnstile2") ;
    try {
        const turnstileResponse = turnstile.getResponse(turnstile2);
        if (!turnstileResponse) {
            showPopupMessage('Please complete the captcha.');
            hideLoadingSpinner(loginForm);
            return;
        }

        const response = await apiRequest(`/auth/login`, {
            method: 'POST',
            credentials: "include",  // Ensures cookies are sent
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, turnstileResponse })
        });

        const data = await response.json();
        hideLoadingSpinner(loginForm);

        if (response.ok) {
			const { accessToken, refreshToken } = data;
			localStorage.setItem("accessToken", accessToken);
		    if (keepLoggedIn) {
				// Store refresh token in a cookie (HttpOnly and Secure flags(in https environment) for better security)
				//document.cookie = `refreshToken=${refreshToken}; Path=/; Max-Age=604800;`;	// 7 days
			}
			localStorage.setItem("userEmail", data.email);
			showPopupMessage2(`Welcome back, ${username}!`,3000,'green');     
			playAudio('/nihongo/media/winxp.mp3');       
            await showAlert('Success! 🎉', `Welcome back, ${username}!`);
            window.location.href = '/nihongo/';         
        } else {
            showPopupMessage(data.error || 'Invalid username or password.');
            turnstile.reset(turnstile2); // Reset captcha on failure
        }
    } catch (error) {
        console.error('Error:', error);
        hideLoadingSpinner(loginForm);
    }
});

// Function to show a loading spinner during async actions
function showLoadingSpinner(element, message) {
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('loading-message');
    loadingMessage.innerHTML = `${message} <div class="spinner"></div>`;
    element.appendChild(loadingMessage);
}

// Function to hide the loading spinner
function hideLoadingSpinner(element) {
    const loadingMessage = element.querySelector('.loading-message');
    if (loadingMessage) {
        element.removeChild(loadingMessage);
    }
}