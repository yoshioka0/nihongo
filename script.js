//constants in config.js

// Utility functions (Used in web-push Subscription)
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

// Define the delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Smooth scrolling for internal anchor links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Check if the link is an internal anchor (starts with #)
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }
    // If it's a link to another page, don't prevent default
  });
});

// Toggle Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.classList.toggle('active');
}
// Close dropdown if clicked outside the dropdown and button
window.addEventListener('click', function (event) {
  const dropdown = document.getElementById('dropdownMenu');
  const button = document.getElementById('dropdownButton'); 
  const username = document.getElementById('activeUser');
  if (!dropdown.contains(event.target) && !button.contains(event.target) && !username.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});

// Footer visibility on scroll
const footer = document.querySelector('.footer-content');
if (footer) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            footer.classList.toggle('p-visible', entry.isIntersecting);
        });
    });
    observer.observe(footer);
}

// Smooth scroll buttons
document.getElementById('scroll-up')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('scroll-down')?.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

// Dialog handling
document.querySelectorAll('.open-dialog').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById(this.getAttribute('data-dialog')).style.display = 'block';
    });
});
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.dialog').style.display = 'none';
    });
});
window.addEventListener('click', event => {
    if (event.target.classList.contains('dialog')) {
        event.target.style.display = 'none';
    }
});

// Check if notifications are enabled or denied
if ('Notification' in window) {
    const notifBtn = document.getElementById('enable-notifications');

    if (Notification.permission === 'denied') {
        if (notifBtn) {
            notifBtn.style.display = 'block';
            notifBtn.addEventListener('click', async () => {
                alert('We need your permission to send you notifications.');
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    notifBtn.style.display = 'none';
                    location.reload();
                } else {
                    alert('Notification permission denied! Enable it from the site settings.');
                }
            });
        }
    } else if (Notification.permission === 'default') {
        console.log('Notification permission has not been requested yet.');
    }
} else {
    console.error('Push notifications are not supported in this browser.');
}



async function clearSubscriptions() {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
            const subscription = await registration.pushManager.getSubscription();
            if (subscription) {
                await subscription.unsubscribe();
                console.log('Previous subscription cleared.');
            }
        }
    }
}


async function ensureCorrectSubscription(registration, userId) {
    try {
        const subscription = await registration.pushManager.getSubscription();
        if (subscription) {
            // Fetch user ID tied to the subscription from the server
            const response = await apiRequest(`/api/subscription-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getJWTToken()}`,
                },
                body: JSON.stringify({ endpoint: subscription.endpoint }),
            });

            if (response.ok) {
                const { serverUserId } = await response.json();

                // Check if the subscription belongs to the logged-in user
                if (serverUserId === userId) {
                    console.log('Subscription matches the logged-in user.');
                    return true; // Subscription is valid
                }

                console.log('Subscription does not match the logged-in user. Clearing it.');
                await subscription.unsubscribe();
            } else {
                console.error('Failed to verify subscription on the server:', response.statusText);
            }
        }
    } catch (error) {
        console.error('Error while ensuring correct subscription:', error);
    }

    return false; // Subscription needs to be recreated
}


if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('/nihongo/service-worker.js');
            console.log('Service Worker registered with scope:', registration.scope);

            const token = getJWTToken();
            const userId = decodeJWT(token).userId;

            const isSubscriptionValid = await ensureCorrectSubscription(registration, userId);
            if (!isSubscriptionValid) {
                await subscribeUserToPush(registration, userId);
            }
        } catch (error) {
            console.error('Error during service worker or subscription setup:', error);
        }
    });
}


async function subscribeUserToPush(registration, userId) {
    const token = getJWTToken();
    if (!token || isTokenExpired(token)) {
        console.error('No valid JWT token found. Subscription cannot be made.');
        return;
    }

    try {
        const newSubscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
        });
 //       const userAgent = navigator.userAgent;
//   	 console.log(deviceInfo);      // This will give the user agent string
//		newSubscription.deviceInfo = deviceInfo;
        newSubscription.userId = userId;

        await apiRequest(`/api/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newSubscription),
        });

        console.log('New subscription sent to the server:', newSubscription);
    } catch (error) {
        console.log('🔴 Failed to subscribe user to push:', error);
    }
}


// Update Active User info
function updateActiveUser() {
    const activeUser = document.getElementById('activeUser');
    const activeUser2 = document.getElementById('activeUser2');
    const adminButton = document.getElementById('admin-btn');
    const token = getJWTToken();

    if (token && !isTokenExpired(token)) {
	try {
	    const { username, role } = decodeJWT(token); // Destructure both 'username' and 'role' in one line
	    if (role === "admin") {
	        adminButton.style.display = 'block';
	    }
	    activeUser.textContent = username || 'No user';
	    activeUser2.textContent = username + `•(${role})` || 'No user';
	} catch (error) {
	    activeUser.textContent = 'No user';
	}
    } else {
        activeUser.textContent = 'No user';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const token = getJWTToken();

    if (!token || isTokenExpired(token)) {

    } else {
        updateActiveUser();
    }
});

// login and sign-up text listeners
const loginHere = document.getElementById("login-here");
const signupHere = document.getElementById("signup-here");

// Function to show a popup message with a progress bar
// Maximum number of pop-ups allowed at once
const MAX_POPUPS = 3;

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
    if (popupCount >= MAX_POPUPS) {
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

// Add click event listeners for login and sign-up
if (window.location.pathname === '/nihongo/') {
    
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
					document.cookie = `refreshToken=${refreshToken}; Path=/; Max-Age=604800`;  // 7 days
				}

            	showPopupMessage(`User created successfully! (${username})`);
                await delay(500);
                alert(`User created successfully! (${username})`);
                document.getElementById('signup-modal').style.display = 'none';
                location.reload();
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
					document.cookie = `refreshToken=${refreshToken}; Path=/; Max-Age=604800`;  // 7 days
				}
				showPopupMessage(`Welcome back, ${username}!`);            
				await delay(500);
                alert(`Welcome back, ${username}!`);
                document.getElementById('login-modal').style.display = 'none';
                location.reload();
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
}
