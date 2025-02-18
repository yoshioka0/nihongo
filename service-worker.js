const CACHE_NAME = 'pwa-cache-v4.6.6';
const OFFLINE_URL = '/nihongo/offline.html';

const urlsToCache = [
    '/',
    '/nihongo/',
    '/nihongo/auth-v2.js',
    '/nihongo/404.html',
    '/nihongo/blocked.html',
    '/nihongo/unauthorized.html',
    '/nihongo/header-footer/header.html',
    '/nihongo/header-footer/footer.html',
    '/nihongo/styles.css',
    '/nihongo/header-footer/header.css',
    '/nihongo/header-footer/footer.css',
    '/nihongo/script.js',
    '/nihongo/header-footer/header.js',
    '/nihongo/favicon/android-chrome-192x192.png',
    OFFLINE_URL
];

// Install and cache files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Serve files from cache & fallback to offline page
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request).then(response => response || caches.match(OFFLINE_URL)))
    );
});

// Activate and clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter(cacheName => cacheName !== CACHE_NAME).map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Listen for push events
self.addEventListener('push', (event) => {
    console.log('Push event received:', event);

    let data = {};
    if (event.data) {
        try {
            data = event.data.json(); // Expecting JSON payload
        } catch (e) {
            console.error('Failed to parse push data:', e);
        }
    }

    const title = data.title || 'Notification';
    const options = {
        body: data.body || 'You have a new message!',
        icon: data.icon || '/img/icon.png', // Path to a default icon
        image: data.image || undefined,        // Optional image
        data: data.url || '/',                 // URL to open on notification click
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
    console.log('Notification click event:', event);

    event.notification.close(); // Close the notification

    const urlToOpen = event.notification.data || '/';
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // Check if the URL is already open
            const matchingClient = clientList.find(client => client.url.includes(urlToOpen));
            
            if (matchingClient && 'focus' in matchingClient) {
                return matchingClient.focus();
            }

            // Otherwise, open a new window/tab
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

// Optional: Cleanup or sync tasks
self.addEventListener('pushsubscriptionchange', (event) => {
    console.log('Push subscription changed:', event);

    // Automatically resubscribe if necessary
    event.waitUntil(
        self.registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY), // Use your VAPID key
        }).then((newSubscription) => {
            // Send the new subscription to the server
            return fetch(`${BASE_URL}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getJWTToken()}`,
                },
                body: JSON.stringify(newSubscription),
            });
        }).catch((error) => {
            console.error('Failed to resubscribe:', error);
        })
    );
});