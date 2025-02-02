//constants in config.js

// Define the delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#^%*?&])[A-Za-z\d@$!%#^*?&]{8,}$/.test(password);

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
        showPopupMessage('Username must be 3-15 characters and contain only letters, numbers, underscores, or hyphens.');
        errorMessage.textContent = 'Username must be 3-15 characters and contain only letters, numbers, underscores, or hyphens.';
        return;
    }

    if (!isStrongPassword(password)) {
        showPopupMessage('Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character. (Aa1@)');
        return;
    }
    
      if (password !== confirmPassword) {
      	showPopupMessage('Passwords do not match!');
  	    errorMessage.textContent = "Passwords do not match!";
    return;
      }

    showLoadingSpinner(signupForm, 'Creating Account...');

    try {
        const turnstileResponse = turnstile.getResponse(turnstile1);
        if (!turnstileResponse) {
            showPopupMessage('Please complete the captcha.');
            hideLoadingSpinner(signupForm);
            return;
        }

        const response = await apiRequest(`/create-user`, {
            method: 'POST',
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
				document.cookie = `refreshToken=${refreshToken}; Path=/; Max-Age=604800; HttpOnly; SameSite=None; Secure=true;`;
			}

        	showPopupMessage(`User created successfully! (${username})`);
            await delay(500);
            alert(`User created successfully! (${username})`);
            window.location.href = '/nihongo/';
        } else {
            showPopupMessage(data.error || 'Something went wrong!');
            turnstile.reset(turnstile1);
        }
    } catch (error) {
        console.error('Error:', error);
        hideLoadingSpinner(signupForm);
        showPopupMessage('Error connecting to the server. Please try again.');
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

    try {
        const turnstileResponse = turnstile.getResponse(turnstile2);
        if (!turnstileResponse) {
            showPopupMessage('Please complete the captcha.');
            hideLoadingSpinner(loginForm);
            return;
        }

        const response = await apiRequest(`/login`, {
            method: 'POST',
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
				document.cookie = `refreshToken=${refreshToken}; Path=/; Max-Age=604800; HttpOnly; SameSite=None; Secure=true;`;	// 7 days
			}
			showPopupMessage(`Welcome back, ${username}!`);            
			await delay(500);
            alert(`Welcome back, ${username}!`);
            window.location.href = '/nihongo/';         
        } else {
            showPopupMessage(data.error || 'Invalid username or password.');
            turnstile.reset(turnstile2); // Reset captcha on failure
        }
    } catch (error) {
        console.error('Error:', error);
        hideLoadingSpinner(loginForm);
        showPopupMessage('Error connecting to the server. Please try again.');
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
