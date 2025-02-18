function loadCSS(filename) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = filename;
    document.head.appendChild(link);
}
loadCSS("/nihongo/header-footer/footer.css");

let isHTMLLoaded = false;  // Flag to track whether the HTML has been loaded
let loadedCount = 0; // Counter to track loaded elements

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('/nihongo/header-footer/header.html', 'header');
    loadHTML('/nihongo/header-footer/footer.html', 'footer');
});

function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            loadedCount++; // Increment counter when one file is loaded

            if (loadedCount === 2 && !isHTMLLoaded) {  // Ensure both are loaded before calling HTMLLoaded()
                isHTMLLoaded = true;
                console.log("HTML (H&F) loaded, proceed with other actions.");
                HTMLLoaded();

            }
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
}

function toggleNav() {
    const menu = document.querySelector(".nav-menu");
	document.querySelector(".hamburger2").classList.toggle("active");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function notifDrop() {
	const notificationDropdown = document.getElementById("notification-dropdown");	
	notificationDropdown.style.display = notificationDropdown.style.display === "block" ? "none" : "block";	 
}	

function toggleDropdown() {	 
const dropdownM = document.getElementById('dropdownMenu');	
  dropdownM.classList.toggle('active');
}

//PWA App
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    document.getElementById('installPWA').style.display = 'block';
});

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install');
            } else {
                console.log('User dismissed the install');
            }
            deferredPrompt = null;
            document.getElementById('installPWA').style.display = 'none';
        });
    }
}


// Close dropdown if clicked outside the dropdown and button
window.addEventListener('click', function (event) {
  const dropdownM = document.getElementById('dropdownMenu');
  const button = document.getElementById('dropdownButton'); 
  const username = document.getElementById('activeUser');
  if (!dropdownM.contains(event.target) && !button.contains(event.target) && !username.contains(event.target)) {
    dropdownM.classList.remove('active');
  }		
});

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
			document.getElementById('mail1').textContent = localStorage.getItem('userEmail');
		} catch (error) {
		    activeUser.textContent = 'No user';
		}
	    } else {
	        activeUser.textContent = 'No user';
	    }
	}
		
	// Fetch and display user subscriptions in the dropdown
	async function fetchSubscriptions() {
		const dropdown = document.getElementById('notification-dropdown');
	    const token = getJWTToken(); // Assumes you have a function to get the JWT token

	    if (!token) {
	        console.error('No valid token. Cannot fetch subscriptions.');
			dropdown.innerHTML = 'No valid token. Cannot fetch subscriptions.';
	        return;
	    }
		dropdown.innerHTML = 'Loading...';
	    try {
	        const response = await apiRequest(`/api/subscriptions`, {
	            headers: {
	                'Authorization': `Bearer ${token}`,
	            },
	        });
	
	        if (!response.ok) {
	            console.error('Failed to fetch subscriptions:', await response.text());
				dropdown.innerHTML = 'Failed to fetch subscriptions.';
	            return;
	        }
	
	        const subscriptions = await response.json();
	
	
	        dropdown.innerHTML = ''; // Clear existing list
	
	        if (subscriptions.length === 0) {
	            dropdown.innerHTML = '<h3>No active subscriptions found.</h3>';
	            return;
	        }
				const heading = document.createElement('h3');
				heading.textContent = 'Active Subscriptions';
				heading.classList.add('dropdown-heading'); // Optional: Add a class for styling
				dropdown.appendChild(heading);
				
	        	subscriptions.forEach(subscription => {
	            const listItem = document.createElement('div');
	            listItem.classList.add('subscription-item');
	
	            const subscriptionInfo = document.createElement('span');
	            subscriptionInfo.textContent = `Device: ${subscription.deviceInfo || 'Unknown Device'}, IP: ${subscription.ipAddress || 'Unknown IP'}, Last Active: ${new Date(subscription.lastActive).toLocaleString() || 'Unknown'}`;
	
	            const deleteButton = document.createElement('button');
	            deleteButton.textContent = 'Delete';
	            deleteButton.onclick = () => deleteSubscription(subscription.endpoint);
	
	            listItem.appendChild(subscriptionInfo);
	            listItem.appendChild(deleteButton);
	
	            dropdown.appendChild(listItem);
	        });
	    } catch (error) {
	        console.error('Error fetching subscriptions:', error);
	    }
	}
	
	// Delete a subscription
	async function deleteSubscription(endpoint) {
	    const token = getJWTToken();
	
	    if (!token) {
	        console.error('No valid token. Cannot delete subscription.');
	        return;
	    }
	
	    try {
	        const response = await apiRequest(`/api/unsubscribe`, {
	            method: 'DELETE',
	            headers: {
	                'Content-Type': 'application/json',
	                'Authorization': `Bearer ${token}`,
	            },
	            body: JSON.stringify({ endpoint }),
	        });
	
	        if (!response.ok) {
	            console.error('Failed to delete subscription:', await response.text());
	            return;
	        }
	
	        console.log('Subscription deleted successfully.');
	        fetchSubscriptions(); // Refresh the list
	    } catch (error) {
	        console.error('Error deleting subscription:', error);
	    }
	}

// 🔴🟢🟠 Tip: Add event listners inside it, else it won't work because the DOM might not be available at that moment.
function HTMLLoaded() {
 	
	 updateActiveUser();	
	
	// Footer visibility on scroll (⭐Footer Script was small so merged in header :⁠-⁠))
	const footer = document.querySelector('.footer-content');
	if (footer) {
	    const observer = new IntersectionObserver(entries => {
	        entries.forEach(entry => {
	            footer.classList.toggle('p-visible', entry.isIntersecting);
	        });
	    });
	    observer.observe(footer);
	}
    // Update the Site-Update
    document.getElementById("last-updated").textContent = lastUpdated;
	
		
		
		
		
	// Assuming the token 
	const token = getJWTToken();
	
	if (token) {
	  const decodedToken = JSON.parse(atob(token.split('.')[1]));
	  const expiryTime = decodedToken.exp * 1000; // Convert to milliseconds
	  startCountdown(expiryTime);
	} else {
	  console.log("No token found");
	}
	
	function startCountdown(expiryTime) {
	  const countdownElement = document.getElementById("countdown");
	
	  const interval = setInterval(() => {
		    const currentTime = Date.now();
		    const remainingTime = expiryTime - currentTime;
		
			if (remainingTime <= 0) {
			  clearInterval(interval);
			  countdownElement.textContent = "Session expired";
			  countdownElement.classList.remove("session-active");
			  countdownElement.classList.add("session-expired");
			 
			  showPopupMessage('Session Expired');
			} else {
			  const minutes = Math.floor(remainingTime / 60000);
			  const seconds = Math.floor((remainingTime % 60000) / 1000);
			  countdownElement.textContent = `⏰ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
			  countdownElement.classList.remove("session-expired");
			  countdownElement.classList.add("session-active");
			}
	  }, 1000);
	}
	


	
	
	
	// log-out functionality 
	const logoutButton = document.getElementById('logout-btn');
	const loginButton = document.getElementById('login-btn');
	// Show the logout button if the user is logged in
	function checkLoginStatus() {
	    const token = localStorage.getItem('accessToken');
	    if (token) {
			loginButton.style.display = 'none'; 
	        logoutButton.style.display = 'block'; // Show the logout button
	    } else {
			loginButton.style.display = 'block'; 
	        logoutButton.style.display = 'none'; // Hide the logout button
	    }
	}
		
	// Call checkLoginStatus to ensure the logout button is shown when appropriate
	checkLoginStatus();		
	
		const savedImage = localStorage.getItem('userProfilePic');
	    document.getElementById('profileImg').src = savedImage || '/nihongo/img/user.png' ; 
	    document.getElementById('profileImg1').src = savedImage || '/nihongo/img/user.png' ; 
	
	
	
}		// End above code will run after header is loaded.


// user icon 
	const imageSources = [
	    '/nihongo/img/dp/icon1.png',
	    '/nihongo/img/dp/icon2.png',
	    '/nihongo/img/dp/icon3.png',
	    '/nihongo/img/dp/icon4.png',
	    '/nihongo/img/dp/icon5.png',
	    '/nihongo/img/dp/icon6.png',
	    '/nihongo/img/dp/icon7.png',
	    '/nihongo/img/dp/icon8.png'
	];
	
	function changeImage() {
	    const img = document.getElementById('profileImg');
	
	    // Normalize current image source to ensure consistency
	    const currentSrc = img.src.replace(location.origin, '');
	    const currentIndex = imageSources.findIndex(src => src === currentSrc);
	
	    // Cycle to the next image
	    const nextIndex = (currentIndex + 1) % imageSources.length;
	    const nextSrc = imageSources[nextIndex];
	    img.src = nextSrc;
	
	    // Save the selected image source in localStorage
	    localStorage.setItem('profileImage', nextSrc);
	}
	
	
	function surprise() { 
	var element = document.getElementById("surprise-message");
	if (element.classList.contains("show")) {
    	element.classList.remove("show");
 	   return;
	}   
	element.classList.add("show");	
	  // Show the party (balloons and confetti)
	  const party = document.getElementById("party");
	  party.classList.remove("hidden");
	
	    const container = document.getElementById('confetti-container');
	    const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
	
	    function createConfetti() {
	      for (let i = 0; i < 50; i++) {
	        const confetti = document.createElement('div');
	        confetti.classList.add('confetti');
	
	        // Random horizontal position
	        confetti.style.left = Math.random() * 100 + 'vw'; 
	
	        // Random vertical position
	        confetti.style.top = Math.random() * 100 + 'vh'; 
	
	        // Random background color
	        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	
	        // Random animation delay
	        confetti.style.animationDelay = Math.random() * 3 + 's'; 
	
	        // Random size
	        const size = Math.random() * 10 + 5; 
	        confetti.style.width = size + 'px';
	        confetti.style.height = size + 'px';
	
	        container.appendChild(confetti);
	      }
	    }
	
	    createConfetti();
	
	  // Fade in the party elements
	  setTimeout(function() {
	    party.style.opacity = 1;
	  }, 100);
	
	
	    // Change button text to indicate surprise was unlocked
	  const sBtn = document.getElementById("surprise-button");
	  sBtn.textContent = "Wow, look at that! 🎉";
	  sBtn.disabled = true; // Disable the button after clicking
	
	  // Optional: Play a sound for added fun
	  //new Audio('/nihongo/jingle.mp3').play();
	// Create or retrieve the global audio instance
	if (!window.jingleAudio) {
		window.jingleAudio = new Audio('/nihongo/media/jingle.mp3');
	}
	// Check if the audio is paused (i.e. not currently playing) before playing it
	if (window.jingleAudio.paused) {
  	window.jingleAudio.play();
	}

}	