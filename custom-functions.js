// Helper Functions (not used in any page, just a clone from config.js)

// Wrapper function to replace showPopupMessage() with showNotification2()
function showPopupMessage(message, duration = 3000) { showNotification2(message, duration, "#ff726f"); }
// Example usage (wherever showPopupMessage was used before): showPopupMessage("This is a soft red notification!");

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

function playAudio(path) {
	const notificationSound = new Audio();
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
// Example usage:	showNotification2("Default Notification", 3000);