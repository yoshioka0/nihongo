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

        if (window.location.pathname === '/nihongo/') {
            document.getElementById('main').style.display = 'flex';
            document.getElementById('master').style.filter = 'none';
            document.getElementById('master').style.pointerEvents = '';
        }
    } catch (error) {
        console.error('Authentication failed:', error);
        logout();
    }
}


// Logout user and call the logout endpoint on the server to blacklist the token
async function logout() { 
    const accessToken = localStorage.getItem("accessToken");

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
    } finally {
        // Clear tokens and session data
        localStorage.removeItem("accessToken");
        document.cookie = "refreshToken=; Path=/; Max-Age=0";
        localStorage.removeItem('chattedUsers');

        // Handle UI change for logged-out users
        if (window.location.pathname === '/nihongo/') {
            document.getElementById('signup-modal').style.display = 'flex';
            document.getElementById('main').style.display = 'none';
            document.getElementById('master').style.filter = 'blur(5px)';
            document.getElementById('master').style.pointerEvents = 'none';
            document.getElementById('activeUser').textContent = 'No user';  
            loadCloudflareScript();
        } else {
            window.location.href = '/nihongo/';
        }
    }
}

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