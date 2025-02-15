// Constants in config.js
const TOKEN = localStorage.getItem('accessToken'); // JWT Token stored in localStorage

// Check if token is available, if not redirect to login page
if (!TOKEN) {
    window.location.href = '/nihongo/unauthorized.html'; // Redirect to login page
}


// Tab switching logic
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

async function loadGlobalConfig() {
    try {
        const response = await apiRequest('/admin/global-config', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        const config = await response.json();

        document.getElementById("toggle-site").checked = !config.siteDisabled;
        document.getElementById("toggle-googleAuth").checked = !config.googleAuthDisabled;
        document.getElementById("toggle-login").checked = !config.loginDisabled;
        document.getElementById("toggle-signup").checked = !config.signupDisabled;
        document.getElementById("toggle-chat").checked = !config.chatDisabled;
        document.getElementById("toggle-upload").checked = !config.uploadDisabled;
    } catch (error) {
        console.error("Failed to load global config:", error);
    }
}

// Load config when the admin panel loads
document.addEventListener("DOMContentLoaded", loadGlobalConfig);

async function updateGlobalConfig() {
    const config = {
        siteDisabled: !document.getElementById("toggle-site").checked,
        googleAuthDisabled: !document.getElementById("toggle-googleAuth").checked,
        loginDisabled: !document.getElementById("toggle-login").checked,
        signupDisabled: !document.getElementById("toggle-signup").checked,
        chatDisabled: !document.getElementById("toggle-chat").checked,
        uploadDisabled: !document.getElementById("toggle-upload").checked,
    };

    try {
        const response = await apiRequest('/admin/global-config', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config)
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Failed to update global config:", error);
    }
}

// Fetch users
async function fetchUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '<p>Loading users...</p>'; // Show loading state

    try {
        const response = await apiRequest(`/admin/users`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            const error = await response.json();
            logMessage(error.error || 'Failed to fetch users', 'error');
            userList.innerHTML = '<p>Error loading users</p>';
            return;
        }

        const users = await response.json();
       
        userList.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            
			userCard.innerHTML = `
			        <div class="user-details">
			            <h3>${user.username}</h3>
			            <p><strong>User ID:</strong> ${user._id}</p>
			            <p><strong>Email:</strong> ${user.email || 'N/A'}</p>
			            <p><strong>IP Address:</strong> ${user.currentIP || 'N/A'}</p>
			            <p><strong>Role:</strong> ${user.role || 'user'}</p>
			            <p><strong>Joined On:</strong> ${user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'}</p>
			            <p><strong>Online:</strong> ${user.isOnline ? 'Yes' : 'No'}</p>
			            <p><strong>Last Active:</strong> ${new Date(user.lastActive).toLocaleString() || '♾️'}</p>
			            <p><strong>Status:</strong> ${user.isSuspended ? 'Suspended' : 'Active'}</p>
			            <div class="user-actions">
			                <button onclick="suspendUser('${user._id}')" ${user.isSuspended ? 'disabled' : ''}>Suspend</button>
			                <button class="act-btn" onclick="activateUser('${user._id}')" ${!user.isSuspended ? 'disabled' : ''}>Activate</button>
			                <button onclick="deleteUser('${user._id}')">Delete</button>
			                <button class="log-btn" onclick="openLogs('${user._id}', '${user.username}')">View Logs</button>
			            </div>
			        </div>
			        <div class="user-profile">					
			            <img src="${user.profilePicture || '/nihongo/img/user.png'}" alt="dp" class="profile-pic" loading="lazy" onclick="openImageInNewTab('${user.profilePicture || '/nihongo/img/user.png'}')">
			        </div>
			`;

            userList.appendChild(userCard);
        });
    } catch (err) {
        logMessage('Error loading users: ' + err, 'error');
        userList.innerHTML = '<p>Error loading users. Please try again later.</p>';
    }
}
function openImageInNewTab(imageUrl) {
    // Only open in a new tab if the image is not the default
    if (imageUrl !== '/nihongo/img/user.png') {
        const newTab = window.open(imageUrl, '_blank');
        if (newTab) {
            newTab.focus();
        } else {
            alert("Unable to open the image. Please check your browser settings.");
        }
    }
}


let currentPage = 1;
const logsPerPage = 10; // Adjust as needed

async function openLogs(userId, username, page = 1) {
    const logList = document.getElementById('log-list');
    const modalTitle = document.getElementById('log-modal-title');
    const paginationControls = document.getElementById('pagination-controls');

    modalTitle.textContent = `Logs for ${username}`;
    logList.innerHTML = '<p>Loading logs...</p>'; // Show loading state
    document.getElementById('log-modal').style.display = 'block'; // Show modal
    currentPage = page;

    try {
        const response = await apiRequest(`/admin/logs/${userId}?page=${page}&limit=${logsPerPage}`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            logList.innerHTML = '<p>Error fetching logs</p>';
            return;
        }

        const { logs, totalLogs } = await response.json();

        if (logs.length === 0) {
            logList.innerHTML = '<p>No logs available</p>';
            paginationControls.innerHTML = ''; // Remove pagination if no logs
            return;
        }

        // Populate logs
        console.log(logs);
        logList.innerHTML = logs.map(log => `
            <div class="log-item">
                <p><strong>Action:</strong> ${log.action}</p>
                <p><strong>Details:</strong> ${log.details || 'N/A'}</p>
                <p><strong>Date:</strong> ${new Date(log.timestamp).toLocaleString()}</p>
                <p><strong>IP:</strong> ${log.ip}</p>
                <button class="delete-log-btn" onclick="deleteLog('${log._id}', '${userId}', '${username}', ${page})">Delete</button>
            </div>
        `).join('');

        // Pagination controls
        const totalPages = Math.ceil(totalLogs / logsPerPage);
        paginationControls.innerHTML = `
            <button onclick="openLogs('${userId}', '${username}', ${page - 1})" ${page === 1 ? 'disabled' : ''}>← Previous</button>
            <span>Page ${page} of ${totalPages}</span>
            <button onclick="openLogs('${userId}', '${username}', ${page + 1})" ${page >= totalPages ? 'disabled' : ''}>Next →</button>
        `;

    } catch (err) {
        logList.innerHTML = '<p>Error loading logs</p>';
    }
}

async function deleteLog(logId, userId, username, page) {
    if (!confirm('Are you sure you want to delete this log?')) return;

    try {
        const response = await apiRequest(`/admin/logs/${logId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            alert('Failed to delete log');
            return;
        }

        alert('Log deleted successfully');
        openLogs(userId, username, page); // Refresh log list on the same page
    } catch (err) {
        alert('Error deleting log');
    }
}

function closeLogs() {
    document.getElementById('log-modal').style.display = 'none';
}

// Suspend User
async function suspendUser(userId) {
    if (!confirm('Are you sure you want to suspend this user?')) return;
    
    try {
        const response = await apiRequest(`/admin/suspend/${userId}`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${TOKEN}` },
        });

        if (response.status === 401) {
            logMessage('Your session has expired. Please log in again.', 'error');
            logoutUser(); // Log out the user
            return;
        }

        const data = await response.json();
        logMessage(data.message || data.error, response.ok ? 'success' : 'error');
        fetchUsers(); // Refresh user list
    } catch (err) {
        logMessage('Error suspending user: ' + err, 'error');
    }
}

// Activate User
async function activateUser(userId) {
    if (!confirm('Are you sure you want to activate this user?')) return;
    
    try {
        const response = await apiRequest(`/admin/activate/${userId}`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${TOKEN}` },
        });

        if (response.status === 401) {
            logMessage('Your session has expired. Please log in again.', 'error');
            logoutUser(); // Log out the user
            return;
        }

        const data = await response.json();
        logMessage(data.message || data.error, response.ok ? 'success' : 'error');
        fetchUsers(); // Refresh user list
    } catch (err) {
        logMessage('Error activating user: ' + err, 'error');
    }
}

// Delete User (Existing function)
async function deleteUser(userId) {
    if (!confirm('Are you sure you want to delete this user?')) return;
    
    try {
        const response = await apiRequest(`/admin/users/${userId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${TOKEN}` },
        });

        if (response.status === 401) {
            logMessage('Your session has expired. Please log in again.', 'error');
            return;
        }

        const data = await response.json();
        logMessage(data.message || data.error, response.ok ? 'success' : 'error');
        fetchUsers(); // Refresh user list
    } catch (err) {
        logMessage('Error deleting user: ' + err, 'error');
    }
}


// Fetch all subscriptions (push notifications)
async function fetchSubscriptions() {
    const subscriptionList = document.getElementById('subscription-list');
    subscriptionList.innerHTML = '<tr><td colspan="3">Loading...</td></tr>'; // Show loading state
    try {
        const response = await apiRequest(`/admin/subscriptions`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            const error = await response.json();
            logMessage(error.error || 'Failed to fetch subscriptions', 'error');
            return;
        }

        const subscriptions = await response.json();
        subscriptionList.innerHTML = subscriptions.map(sub => `
            <tr>
                <td>${sub.userId}</td>
                <td>${sub.endpoint}</td>
                <td>
                    <button onclick="deleteSubscription('${sub._id}')">Delete</button>
                </td>
            </tr>
        `).join('');
    } catch (err) {
        logMessage('Error loading subscriptions: ' + err, 'error');
        subscriptionList.innerHTML = '<tr><td colspan="3">Error loading subscriptions</td></tr>';
    }
}

// Delete subscription
async function deleteSubscription(subscriptionId) {
    if (!confirm('Are you sure?')) return;
    try {
        const response = await apiRequest(`/admin/subscriptions/${subscriptionId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            const error = await response.json();
            logMessage(error.error || 'Failed to delete subscription', 'error');
            return;
        }

        logMessage('Subscription deleted', 'success');
        fetchSubscriptions();
    } catch (err) {
        logMessage('Error deleting subscription: ' + err, 'error');
    }
}

// Send notification
document.getElementById('notification-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const icon = document.getElementById('icon').value || null;
    const image = document.getElementById('image').value || null;
    const username = document.getElementById('username').value || null;

    try {
        const response = await apiRequest(`/admin/notify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            },
            body: JSON.stringify({ title, message, icon, image, username })
        });

        if (!response.ok) {
            const error = await response.json();
            logMessage(error.error || 'Failed to send notification', 'error');
            return;
        }

        logMessage('Notification sent', 'success');
    } catch (err) {
        logMessage('Error sending notification: ' + err, 'error');
    }
});

// Fetch and display notifications
async function fetchNotifications() {
    const notificationList = document.getElementById('notification-list');
    
    // Ensure the parent container is using Flexbox
	notificationList.style.display = 'flex'; // Add this to explicitly set the display type.
	notificationList.style.flexWrap = 'wrap'; // Allow wrapping of the cards to the next row
	notificationList.style.gap = '0px'; // Space between cards
	notificationList.style.justifyContent = 'center'; // Center horizontally
//	notificationList.style.alignItems = 'center'; // Center vertically
	
	notificationList.innerHTML = '<p>Loading...</p>'; // Show loading state

    try {
        const response = await apiRequest(`/admin/notifications`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            const error = await response.json();
            logMessage(error.error || 'Failed to fetch notifications', 'error');
            return;
        }

        const notifications = await response.json();
        notificationList.innerHTML = notifications.map(notification => {
            const backgroundStyle = notification.image
                ? `background-image: url('${notification.image}');`
                : `background: linear-gradient(45deg, #ff7e5f, #feb47b);`; // Default gradient
            return `
                <div class="notification-card" style="${backgroundStyle}">
                    <div class="notification-header">
                        <h3>${notification.title}</h3>
                        <span class="notification-date">${new Date(notification.sentAt).toLocaleString()}</span>
                    </div>
                    <div class="notification-body">
                        <p>${notification.message}</p>
                    </div>
                    <div class="notification-footer">
                        ${notification.icon ? `<img src="${notification.icon}" alt="Icon" class="notification-icon">` : ''}
                        <div class="notification-sender">
                            <strong>To:</strong> ${notification.username || 'Unknown'}
                        </div>
                        <div class="notification-status">
                              <strong>Status:</strong> ${notification.status}
                            ${notification.failurereason ? `<span>Failure Reason: ${notification.failurereason}</span>` : ''}
                        </div>
                        <button onclick="deleteNotification('${notification._id}')">Delete</button>
                    </div>
                </div>
            `;
        }).join('');
    } catch (err) {
        logMessage('Error loading notifications: ' + err, 'error');
        notificationList.innerHTML = '<p>Error loading notifications</p>';
    }
}
// Delete notification
async function deleteNotification(notificationId) {
    if (!confirm('Are you sure?')) return;
    try {
        const response = await apiRequest(`/admin/notifications/${notificationId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            const error = await response.json();
            logMessage(error.error || 'Failed to delete notification', 'error');
            return;
        }

        logMessage('Notification deleted', 'success');
        fetchNotifications();
    } catch (err) {
        logMessage('Error deleting notification: ' + err, 'error');
    }
}

async function fetchLogs() {
    const logList = document.getElementById('log-list2');
    logList.innerHTML = '<tr><td colspan="6">Loading...</td></tr>';
    try {
        const response = await apiRequest(`/admin/logs`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        });

        if (!response.ok) {
            const error = await response.json();
            logMessage(error.error || 'Failed to fetch logs', 'error');
            return;
        }

        const logs = await response.json();
        logList.innerHTML = logs.map(log => `
            <tr>
                <td>${log.user}</td>
                <td>${log.username}</td>
                <td>${log.action}</td>
                <td>${log.details}</td>
                <td>${log.ip}</td>
                <td>${new Date(log.timestamp).toLocaleString()}</td>
            </tr>
        `).join('');
    } catch (err) {
        logMessage('Error loading logs: ' + err, 'error');
        logList.innerHTML = '<tr><td colspan="6">Error loading logs</td></tr>';
    }
}




// Function to log messages to the console div
function logMessage(message, type = 'log') {
    const consoleDiv = document.getElementById('console');
    const logEntry = document.createElement('div');
    logEntry.className = `log ${type}`;
    logEntry.textContent = message;
    consoleDiv.appendChild(logEntry);
    consoleDiv.scrollTop = consoleDiv.scrollHeight; // Auto-scroll to the bottom
}
