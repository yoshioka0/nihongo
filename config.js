// Constants

//service-worker-cache v7.1
const lastUpdated = "February 28, 2025 17:00 IST (EoL)"; // Update dynamically in footer

//const SOCKET_URL = 'http://localhost:3000'; 
const SOCKET_URL = 'https://nihongo-backend.onrender.com'; 

const GOOGLE_CLIENT_ID='1015740375628-hig26ebdp3bbt4ma13pfr0ogs687838o.apps.googleusercontent.com';
const PUBLIC_VAPID_KEY = 'BDdr26kHzz40SAgoMRYN6rVLogOqv1p8OoPw-NqX2cCTRrmK_j4YHwHVRvM8xrjw0kAx36ZuHN976uWRB0qGIjI';
let BASE_URL = 'https://nihongo-backend.onrender.com'; 

let alertCooldown = false;  // Global flag for cooldown

// Dynamically Choose the Fastest Server
const backends = [
//	   { url: "http://localhost:3000", latency: Infinity }, // prioritize localhost 
      { url: "https://nihongo-backend.onrender.com", latency: Infinity },	// ✅ Use this fully functional 
//      { url: "https://nihongo-backend-env.up.railway.app", latency: Infinity }	// ❌Don't Use if you want secure cookie to work
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
          if (!["/auth/refresh-token", "/api/subscribe", "/api/subscription-user"].includes(endpoint)) {
			if (response.status === 403 || response.status === 404 || response.status === 429) {
		        const contentType = response.headers.get("content-type");
		        if (contentType && contentType.includes("text/html")) {
		            // If the response is HTML, open it in a new tab
		            const errorMessages = {
					    403: "You don’t have permission to access this page.",
					    404: "The requested resource was not found.",
					    500: "An internal server error occurred. Please try again later.",
						429: "Too many requests. Please try again later"
					};					
					const message = errorMessages[response.status] || "An error occurred.";
					await showAlert(`Error: ${response.status}`, message);
		            const htmlContent = await response.text();
					const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
					doc.querySelectorAll('a.logo').forEach(a => (a.href = "/nihongo"));
					document.open(), document.write(doc.documentElement.outerHTML), document.close();	//Use same tab (don't use it's frustrating)
		            //const newTab = window.open(); newTab.document.write(doc.documentElement.outerHTML); newTab.document.close();
		        } else {
		            // Otherwise, handle it as JSON
		            const data = await response.json();
		            if (!alertCooldown) {
		                showAlert(data.message || data.error || "Access denied.");
		                alertCooldown = true;
		                setTimeout(() => {
		                    alertCooldown = false;
		                }, 5000);
		            }
		        }
			BASE_URL = backend.url
			return response;
		    }
            if (response.status === 503) {
		        const contentType = response.headers.get("content-type");
		        if (contentType && contentType.includes("text/html")) {
		            // If the response is HTML, open it in a new tab
		            const htmlContent = await response.text();
		            const newTab = window.open();
		            newTab.document.write(htmlContent);
		            newTab.document.close();
		        } 
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
function removePopupMessage2() {
    const alertBox = document.getElementById('custom-alert');
    if (alertBox) { alertBox.remove(); } }
    
function showPopupMessage2(message, arg1 = 3000, arg2 = '#ff4b5c') {
	let duration = typeof arg1 === "number" ? arg1 : 3000, background = typeof arg1 === "string" ? arg1 : arg2;
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

    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
        position: "fixed", inset: "0", background: "rgba(0,0,0,0.6)", zIndex: "999"
    });

    const alertBox = document.createElement("div");
    Object.assign(alertBox.style, {
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        background: "#f5f5f5", color: "#000", padding: "0", borderRadius: "12px",
        textAlign: "center", fontSize: "18px", boxShadow: "0 12px 25px rgba(0,0,0,0.4)",
        zIndex: "1000", width: "min(90%,400px)"
    });

    // Create a shadow root inside alertBox  // shadow DOM is not affected by external css
    const shadow = alertBox.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
        <style>
            * { margin: 0; padding: 0; font-family: Arial, sans-serif; }
            .header { background:#007BFF; color:#fff; padding:10px; font-weight:bold; border-radius:12px 12px 0 0; }
            .content { margin: 20px; }
            .btn { margin: 20px 0; padding: 10px 30px; border: none; border-radius: 5px;
                   background: linear-gradient(135deg,#007BFF,#0056b3); color: white;
                   font-weight: bold; font-size: 16px; cursor: pointer; }
        </style>
        <div class="header">${title}</div>
        <p class="content">${message}</p>
        <button class="btn">OK</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(alertBox);

    return new Promise(resolve => {
        shadow.querySelector("button").onclick = () => {
            resolve();
            alertBox.style.opacity = overlay.style.opacity = "0";
            setTimeout(() => { overlay.remove(); alertBox.remove(); }, 300);
        };
    });
}

// Custom Confirmation Box 
function showConfirmBox(message) {
    return new Promise((resolve) => {
        if (!document.getElementById("confirm-style")) {
            const style = document.createElement("style");
            style.id = "confirm-style";
            style.innerHTML = `
                .confirm-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex;
                    align-items: center; justify-content: center; z-index: 1000; }
                .confirm-box { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); text-align: center;
                    min-width: 280px; font-size: 16px; font-weight: 500; }
                .confirm-buttons { margin-top: 15px; display: flex; justify-content: center; gap: 15px; }
                .confirm-btn { padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; font-weight: bold; }
                .confirm-yes { background: #4CAF50; color: white; }
                .confirm-no { background: #f44336; color: white; }
            `;
            document.head.appendChild(style);
        }

        // Create confirmation box
        const overlay = document.createElement("div"),
              box = document.createElement("div"),
              buttons = document.createElement("div"),
              btnYes = document.createElement("button"),
              btnNo = document.createElement("button");

        overlay.className = "confirm-overlay";
        box.className = "confirm-box";
        buttons.className = "confirm-buttons";
        btnYes.className = "confirm-btn confirm-yes";
        btnNo.className = "confirm-btn confirm-no";

        box.innerHTML = `<p>${message}</p>`;
        btnYes.innerText = "Yes";
        btnNo.innerText = "No";

        buttons.append(btnYes, btnNo);
        box.appendChild(buttons);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        // Handle clicks
        btnYes.onclick = () => { resolve(true); closeConfirmBox(); };
        btnNo.onclick = () => { resolve(false); closeConfirmBox(); };

        function closeConfirmBox() { document.body.removeChild(overlay); }
    });
}

/* Example usage inside an async function
async function deleteItem() {
    const confirmed = await showConfirmBox("Are you sure you want to delete?");
    if (!confirmed) return showPopupMessage2("Cancelled!");
	showPopupMessage2("Item deleted!", 3000, 'green');
}	*/

function showNotification2(message, arg1 = 3000, arg2 = "#4a90e2") {
	let duration = typeof arg1 === "number" ? arg1 : 3000,	bgColor = typeof arg1 === "string" ? arg1 : arg2;
    if (!document.getElementById("notif-style")) {
        const style = document.createElement("style");
        style.id = "notif-style";
        style.innerHTML = `
            #notification-container { position: fixed; bottom: 20px; right: 10px; z-index: 1000; display: flex; flex-direction: column; gap: 10px; }
            .notification { color: white; padding: 12px 18px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); 
                font-size: 14px; font-weight: 500; display: flex; align-items: center; gap: 10px; min-width: 250px; 
                transform: translateX(100%); opacity: 0; transition: transform 0.4s, opacity 0.4s; position: relative; overflow: hidden; }
            .notification.show { transform: translateX(0); opacity: 1; }
            .close-btn { margin-left: auto; cursor: pointer; font-size: 16px; font-weight: bold; opacity: 0.7; }
            .close-btn:hover { opacity: 1; }
            .progress-bar { position: absolute; top: 0; left: 0; height: 3px; background: white; width: 0%; transition: width linear; }
        `;
        document.head.appendChild(style);
    }

    let container = document.getElementById("notification-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "notification-container";
        document.body.appendChild(container);
    }

    const notification = document.createElement("div"),
          progress = document.createElement("div");

    notification.className = "notification";
    notification.style.background = bgColor; // Set background color dynamically
    progress.className = "progress-bar";
    
    notification.innerHTML = `<span>${message}</span><span class="close-btn">&times;</span>`;
    notification.appendChild(progress);
    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
        progress.style.width = "100%"; // Progress bar moves from left to right
        progress.style.transition = `width ${duration}ms linear`;
    }, 50);

    const autoDismiss = setTimeout(() => removeNotification(notification), duration);
    notification.querySelector(".close-btn").onclick = () => (clearTimeout(autoDismiss), removeNotification(notification));
}

const removeNotification = (n) => (n.classList.remove("show"), setTimeout(() => n.remove(), 400));
// Example usage:	showNotification2("Default Blue Notification", 3000);

// Wrapper function to replace showPopupMessage() with showNotification2()
function showPopupMessage(message, duration = 3000) { showNotification2(message, duration, "#ff726f"); }
// Example usage (wherever showPopupMessage was used before): showPopupMessage("This is a soft red notification!");