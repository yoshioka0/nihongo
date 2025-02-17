// Constants
//service-worker-cache v4.6
const lastUpdated = "February 17, 2025 13:30 IST"; // Update dynamically in footer

//const SOCKET_URL = 'http://localhost:3000'; 
const SOCKET_URL = 'https://nihongo-backend.onrender.com'; 

const GOOGLE_CLIENT_ID='1015740375628-hig26ebdp3bbt4ma13pfr0ogs687838o.apps.googleusercontent.com';
const PUBLIC_VAPID_KEY = 'BDdr26kHzz40SAgoMRYN6rVLogOqv1p8OoPw-NqX2cCTRrmK_j4YHwHVRvM8xrjw0kAx36ZuHN976uWRB0qGIjI';
let BASE_URL

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
                showPopupMessage2(data.message || "Access denied.", 5000, '#ff4b5c');
            }
            
            if (response) {
                BASE_URL = backend.url; // Update BASE_URL dynamically   
                return response; // Return response from working backend
            }
        } catch (error) {
            console.warn(`🟠 Backend failed: ${backend.url}, trying next...`);
        }
    }
    showPopupMessage("🔴 All backends failed. Please try again later.");
    throw new Error("🔴 All backends failed.");
}