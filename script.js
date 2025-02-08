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
