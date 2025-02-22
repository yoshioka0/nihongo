// Constants

//service-worker-cache v5.1
const lastUpdated = "February 23, 2025 02:25 IST (EoL)"; // Update dynamically in footer

//const SOCKET_URL = 'http://localhost:3000'; 
const SOCKET_URL = 'https://nihongo-backend.onrender.com'; 

const GOOGLE_CLIENT_ID='1015740375628-hig26ebdp3bbt4ma13pfr0ogs687838o.apps.googleusercontent.com';
const PUBLIC_VAPID_KEY = 'BDdr26kHzz40SAgoMRYN6rVLogOqv1p8OoPw-NqX2cCTRrmK_j4YHwHVRvM8xrjw0kAx36ZuHN976uWRB0qGIjI';
let BASE_URL

let alertCooldown = false;  // Global flag for cooldown

// Dynamically Choose the Fastest Server
const backends = [
//   { url: "http://localhost:3000", latency: Infinity }, // prioritize localhost 
      { url: "https://nihongo-backend.onrender.com", latency: Infinity },	// ✅ Use this fully functional 
//    { url: "https://nihongo-backend-env.up.railway.app", latency: Infinity }	// ❌Don't Use if you want secure cookie to work
];

async function getFastestBackend() {
    const testEndpoint = "/ping";

    const promises = backends.map(async backend => {
        const startTime = Date.now();
        try {
            const response = await fetch(backend.url + testEndpoint, { method: "GET", signal: (new AbortController()).signal });
            if (response.ok) {
                backend.latency = Date.now() - startTime;
                console.log(`${backend.url} latency: ${backend.latency}ms`);
            }
        } catch (error) {
            backend.latency = Infinity;
        }
    });

    await Promise.all(promises);
    backends.sort((a, b) => a.latency - b.latency);
    return backends[0].url;
}

// Update BASE_URL and log the fastest backend
(async () => {
    BASE_URL = await getFastestBackend();
	    if (window.location.pathname === '/nihongo/chats/v3/') {
		// Socket Connection shifted back to its own place bcz I am not ready for REDIS setup.
	    }
    console.log("🟢 Using backend:", BASE_URL);
})();

// Refresh every 5 minutes
setInterval(async () => {
    BASE_URL = await getFastestBackend();
    console.log("🟢 Updated backend:", BASE_URL);
}, 300000); // 5 minutes = 300,000ms

// Auto switch on API request failure
async function apiRequest(endpoint, options) {
    let response;
    for (const backend of backends) {
        try {
            response = await fetch(backend.url + endpoint, options);
            // Show the popup message if the status code is 403
            if (response.status === 403) {
                const data = await response.json();

				if (!alertCooldown) {
				    showAlert(data.message || "Access denied.");
				    alertCooldown = true;  // Set cooldown active
				    setTimeout(() => {
				        alertCooldown = false;  // Reset cooldown after 3 seconds (or your preferred time)
				    }, 5000);  // Cooldown period (3000 ms = 3 seconds)
				}
            }
            
            if (response) {
                BASE_URL = backend.url; // Update BASE_URL dynamically   
                return response; // Return response from working backend
            }
        } catch (error) {
            console.warn(`🟠 Backend failed: ${backend.url}, trying next...`);
        }
    }
    showPopupMessage2("🔴 All backends failed. Please try again later.");
    throw new Error("🔴 All backends failed.");
}

// Offline Indicator
function showOfflineBanner() {
    let banner = document.createElement('div');
    banner.id = 'offline-banner'; // Add an ID to prevent duplicates
    banner.innerText = 'You are offline. Some features may not be available.';
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.width = '100%';
    banner.style.background = 'rgba(255,0,0,0.7)';
    banner.style.color = 'white';
    banner.style.textAlign = 'center';
    banner.style.padding = '5px';
    banner.style.zIndex = '9999';
    banner.style.pointerEvents = 'none';
    document.body.prepend(banner);
}

function removeOfflineBanner() {
    let banner = document.getElementById('offline-banner');
    if (banner) { banner.remove(); } }
// Check offline status on page load
window.addEventListener('load', () => {
    if (!navigator.onLine) { showOfflineBanner();    } });
// Handle going offline
window.addEventListener('offline', showOfflineBanner);
// Handle coming back online
window.addEventListener('online', removeOfflineBanner);


// Helper Function 
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

const notificationSound = new Audio(); // Create without a source initially

function playAudio(path) {
    notificationSound.src = path; // Set source dynamically
    notificationSound.currentTime = 0; // Restart from beginning
    notificationSound.play().catch(error => console.error('Error playing sound:', error));
}

function showAlert(title, message) {
	if (message === undefined) { message = title; title = "Alert!"; }
    const overlay = Object.assign(document.body.appendChild(document.createElement("div")), { 
        style: `position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:999;`
    });

    const alertBox = Object.assign(document.body.appendChild(document.createElement("div")), { 
        style: `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background: #f5f5f5; color: #000;padding:0;border-radius:12px;
        text-align:center;font-size:18px;box-shadow:0 12px 25px rgba(0,0,0,0.4);
        z-index:1000;width:min(90%,400px);`
    });

    alertBox.innerHTML = `<div style="background:#007BFF;color:#fff;padding:10px;
        font-weight:bold;border-radius:12px 12px 0 0;">${title}</div>
        <p style="margin:20px;">${message}</p>
        <button style="margin: 20px 0;padding:10px 30px;border:none;border-radius:5px;
        background:linear-gradient(135deg,#007BFF,#0056b3);color:white;
        font-weight:bold;font-size:16px;cursor:pointer;">OK</button>`;

    return new Promise(resolve => alertBox.querySelector("button").onclick = () => {
		resolve(); //Proceed immediately 
		alertCooldown = false;
        alertBox.style.opacity = overlay.style.opacity = "0";        
        setTimeout(() => (overlay.remove(), alertBox.remove()), 300);
    });
}