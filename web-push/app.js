//Web-Push & Service-worker Registration 
// Keep Service-worker at root(/nihongo) as it will register at that location.

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


//📢📢 Notification related function scrapped from /nihongo/script.js
	// Check if notifications are enabled or denied
		if ('Notification' in window) {
		    const notifBtn = document.getElementById('enable-notifications');
			if (!notifBtn) { alert('notif btn unavl'); }
		    if (Notification.permission === 'denied') {
		        if (notifBtn) {
		            notifBtn.style.display = 'block';
		            notifBtn.addEventListener('click', async () => {
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
				notifBtn.style.display = 'block';
		        console.log('Notification permission has not been requested yet.');
		    }
		} else {
		    console.error('Push notifications are not supported in this browser.');
		}
		
		
	if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('/nihongo/service-worker.js')
        .then(async registration => {
            console.log('Service Worker registered with scope:', registration.scope);

            if (Notification.permission === 'granted') {
                const token = getJWTToken();
                if (!token || isTokenExpired(token)) {
                    console.warn('No valid JWT token. Skipping subscription check.');
                    return;
                }

                const userId = decodeJWT(token).userId;
                const isSubscriptionValid = await ensureCorrectSubscription(registration, userId);
                if (!isSubscriptionValid) {
                    await subscribeUserToPush(registration, userId);
                }
            } else {
                console.log('Notifications are not granted. Subscription check skipped.');
            }
        })
        .catch(error => console.error('Service Worker registration failed:', error));
}
    
    
    
    
		document.getElementById('enable-notifications')?.addEventListener('click', async () => {
		    if ('serviceWorker' in navigator && 'PushManager' in window) {			
		        try {
		            const registration = await navigator.serviceWorker.getRegistration();
		            if (!registration) {
		                console.error('Service Worker is not registered yet.');
		                return;
		            }
		            const token = getJWTToken();
					if (!token || isTokenExpired(token)) {
				        showPopupMessage2('No valid token found. Subscription cannot be made.',2000);
				        return;
				    }
		            const userId = decodeJWT(token).userId;
		
		            const isSubscriptionValid = await ensureCorrectSubscription(registration, userId);
		            if (!isSubscriptionValid) {
		                await subscribeUserToPush(registration, userId);
		            }
		        } catch (error) {
		            console.error('Error during push subscription:', error);
		        }
		    }
		});
		

async function subscribeUserToPush(registration, userId) {
    const token = getJWTToken();
    if (!token || isTokenExpired(token)) {
        showPopupMessage2('No valid JWT token found. Subscription cannot be made.',2000);
        return;
    }

    try {    	  
		showPopupMessage2('Subscribing for Webpush...', 10000, '#E5914D');			
        const newSubscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
        });
        newSubscription.userId = userId;
        await apiRequest(`/api/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newSubscription),
        });
        const notifBtn = document.getElementById('enable-notifications');
		if (!notifBtn) { alert('notif btn unavl'); }
		showPopupMessage2('Subscribed successfully!', 2000, 'green');
        console.log('New subscription sent to the server:', newSubscription);
        document.getElementById('enable-notifications').style.display = 'none';
    } catch (error) {
    	showPopupMessage2(`${error}`);
        console.log('🔴 Failed to subscribe user to push:', error);
    }
}




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
		