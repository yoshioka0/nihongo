// Chat Frontend Script (chat.js)

// Connect to the server using Socket.io
const socket = io(BASE_URL, {
    query: { token: localStorage.getItem('jwt') }
});

// DOM Elements
const chatList = document.getElementById('chat-list'); // Left panel: list of users/chatrooms
const chatWindow = document.getElementById('chat-window'); // Right panel: chat messages
const messageInput = document.getElementById('message-input'); // Message input box
const sendButton = document.getElementById('send-button'); // Send button
const logoutButton = document.getElementById('logoutBtn'); // Logout button
const blockButton = document.getElementById('block-button'); // Block button (to be added in the HTML)

// Decode JWT to get user details
function decodeJWT(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
    }
}

// Get user details from JWT
const jwt = localStorage.getItem('jwt');
if (!jwt) {
    alert('Authentication token not found. Please log in again.');
    window.location.href = '/nihongo'; // Redirect to login if token is missing
}

const decoded = decodeJWT(jwt);
const senderUserId = decoded.userId; // Sender's userId (from JWT)
const senderUsername = decoded.username;

// Set the username in the UI
document.getElementById('myUsername').textContent = senderUsername;

// Global Variable for recipient's user ID
let currentChatUserId = null; // Tracks the currently selected recipient user

// Helper Function: Fetch API Wrapper
async function fetchAPI(endpoint, method = 'GET', body = null) {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
    };
    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    const response = await apiRequest(`${endpoint}`, options); // Added full URL
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}


// 1. Load User List (Left Panel) with Search and Always Show Chatted Users
async function loadChatList(query = '') {
    try {
        chatList.innerHTML = '';

        // Retrieve previously chatted users from localStorage
        const chattedUsers = JSON.parse(localStorage.getItem('chattedUsers')) || [];

        // If no search query, load all chatted users
        if (!query) {
            chattedUsers.forEach(({ username, userId }) => {
                const userItem = document.createElement('div');
                userItem.textContent = username;
                userItem.classList.add('user-item');
                userItem.dataset.userId = userId; // Store the userId in the dataset

                userItem.addEventListener('click', () => openChat(userId, username)); // Pass userId to openChat
                chatList.appendChild(userItem);
            });
        } else {
            // Load users based on search query
            const users = await fetchAPI(`/api/users?username=${query}`);
            users.forEach((user) => {
                const userItem = document.createElement('div');
                userItem.textContent = user.username;
                userItem.classList.add('user-item');
                userItem.dataset.userId = user._id; // Store the userId in the dataset

                userItem.addEventListener('click', () => openChat(user._id, user.username)); // Pass userId to openChat
                chatList.appendChild(userItem);
            });
        }

    } catch (error) {
        chatList.innerHTML = '<p>No users found. Query length must be >=3</p>';
        console.error('Error loading chat list:', error.message);
    }
}

//  Search Users (Trigger on input change)
function searchUsers() {
    const query = document.getElementById('search-users').value.trim();
    if (query.length >= 3) {
        loadChatList(query);  // Pass the search query to load the user list
    }
}


// 2. Open Chat with a User
async function openChat(recipientUserId, recipientUsername) {
    currentChatUserId = recipientUserId;
    currentChatUsername = recipientUsername;

			
			document.getElementById("chat-user").textContent = `💬 Chatting with ${recipientUsername}`;
    // Clear the chat window and add a fixed header
    chatWindow.innerHTML = `
        <div class="chat-messages"></div> 
					`;

    const chatMessagesContainer = chatWindow.querySelector('.chat-messages');

    // Join the chat room
    socket.emit('join', { senderUserId, recipientUserId });

    try {
        const messages = await fetchAPI(`/chats/${senderUserId}/${recipientUserId}`);
        if (messages.length === 0) {
            chatMessagesContainer.innerHTML = '<p>No messages yet.</p>';
            return;
        }

        // Display each message
        messages.forEach((message) => {
            const isSelf = message.sender._id === senderUserId;
            displayMessage(message, isSelf);
        });

        // Mark messages as read
        markMessagesAsRead();

    } catch (error) {
        console.error('Error loading chat messages:', error.message);
        chatMessagesContainer.innerHTML = '<p>Error loading messages. Please try again later.</p>';
    }




    // Show block button if user is not the current user
    if (senderUserId !== recipientUserId) {
        blockButton.style.display = 'inline-block';
        blockButton.onclick = () => blockUser(); // Block button action
    } else {
        blockButton.style.display = 'none';
    }
}

// 3. Display Messages
function displayMessage(message, isSelf) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isSelf ? 'self' : 'other');

    // Create the message text element
    const messageText = document.createElement('p');
    messageText.textContent = message.message;

    // Create the timestamp element
		    const formattedDate = new Date(message.timestamp).toLocaleDateString([], {
		    year: 'numeric',
		    month: 'short',
		    day: 'numeric'
		});	
		const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
		    hour: '2-digit',
		    minute: '2-digit',
		    second: '2-digit'
		});
	const formattedDateTime = `${formattedDate}, ${formattedTime}`;
//    const formattedTime = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'  });
    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.textContent = formattedDateTime;

    // Append message text and timestamp to the message div
    messageDiv.appendChild(messageText);
    messageDiv.appendChild(timestamp);

    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// 4. Send a Message
// 4. Send a Message
async function sendMessage() {
    const messageText = messageInput.value.trim();
    if (!messageText || !currentChatUserId) return;

    const message = {
        sender: senderUserId,             // sender is extracted from the JWT
        receiver: currentChatUserId,      // receiver is the selected user
        message: messageText,             // message is the content typed by the user
    };

    try {
        // Emit the message to the backend via socket
        socket.emit('sendMessage', message);
        
        // Clear the input field
        messageInput.value = '';

        // Update localStorage with the new chatted user (both username and userId)
        const chattedUsers = JSON.parse(localStorage.getItem('chattedUsers')) || [];

        if (!chattedUsers.some(user => user.username === currentChatUsername)) {
            chattedUsers.push({
                username: currentChatUsername,
                userId: currentChatUserId // Save the userId as well
            });
            localStorage.setItem('chattedUsers', JSON.stringify(chattedUsers));
        }

    } catch (error) {
        console.error('Error sending message:', error.message);
    }
}

// 5. Receive Messages via WebSocket
socket.on('receiveMessage', (message) => {
    // Check if the message is relevant to the current chat (either sent or received by the user)
    if (message.receiver === senderUserId || message.sender === senderUserId) {
    	typingIndicator.style.display = 'none';
        displayMessage(message, message.sender === senderUserId); // Display as 'self' if the user is the sender
    }
});

// ### Notify for message
function displayNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000); // Hide after 5 seconds
}

// 6. Handle Typing Indicator
let typingTimeout;
const typingIndicator = document.getElementById('typing-indicator'); // Get the existing typing indicator element

messageInput.addEventListener('input', () => {
    if (currentChatUserId && senderUserId !== currentChatUserId) {
        socket.emit('typing', { senderId: senderUserId, receiverId: currentChatUserId });
    }
    
});

// 7. Typing Indicator Display
socket.on('typing', ({ senderId }) => {
    console.log('Typing:', senderId); // For debugging
    if (senderId !== senderUserId && currentChatUserId === senderId) {
        typingIndicator.style.display = 'flex';
        typingIndicator.textContent = `${currentChatUsername} is typing...`;
    }
    clearTimeout(typingTimeout); // Reset typing timeout
    typingTimeout = setTimeout(() => {
        // Hide typing indicator if no more typing happens after 2 second
        typingIndicator.style.display = 'none';
    }, 2000);
});


// 8. Block User
async function blockUser(recipientUserId) {
    try {
        // Constructing the request body with the blockUserId
        const requestBody = {
            blockUserId: recipientUserId // The ID of the user to block
        };

        // Sending the request to the server with the correct endpoint and data
        const response = await apiRequest(`/chats/block-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}` 
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (response.ok) {
            alert('User has been blocked.');
            // Optionally remove the user from the chat list or close the chat
            chatWindow.innerHTML = '<p>You have blocked this user.</p>';
            blockButton.style.display = 'none';
        } else {
            alert(data.error || 'Error blocking user.');
        }
    } catch (error) {
        console.error('Error blocking user:', error.message);
    }
}

//9.0 Availability-Pre
// Emit 'userBusy' when the user switches tabs or becomes inactive
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Emit userBusy when the tab is switched
        socket.emit('userBusy', { senderUserId});
        console.log('User Busy emitted.');
    } else {
        // Optionally, emit 'userOnline' when they return
        socket.emit('userOnline', { senderUserId: currentChatUserId });
        console.log('User Online emitted.');
    }
});
// Emit 'userOffline' when the user leaves or closes the website
window.addEventListener('beforeunload', () => {
    socket.emit('userOffline', { senderUserId});
    console.log('User Offline emitted.');
});

// 9. Availability 
socket.on('userOnline', ({senderUserId}) => {
    console.log(senderUserId, 'is online');
    document.getElementById('chat-user').classList.add('online');
    userId=senderUserId;
    const userElement = document.querySelector(`[data-user-id="${userId}"]`);
    if (userElement) {
        userElement.classList.remove('offline');
        userElement.classList.remove('busy');
        userElement.classList.add('online');
    }
});

socket.on('userOffline', ({senderUserId}) => {
	console.log(senderUserId, 'is offline');
	userId=senderUserId;
    const userElement = document.querySelector(`[data-user-id='${userId}']`);
    if (userElement) {
    	userElement.classList.remove('online');
        userElement.classList.remove('busy');
        userElement.classList.add('offline');
    } else {
        console.log(`User element not found for userId: ${userId}`);
    }
});

socket.on('userBusy', ({senderUserId}) => {
	console.log(senderUserId, 'is busy');
	document.getElementById('chat-user').classList.add('busy');
	userId=senderUserId;
    const userElement = document.querySelector(`[data-user-id='${userId}']`);
    if (userElement) {
    	userElement.classList.remove('online');
        userElement.classList.remove('offline');
        userElement.classList.add('busy');
    } else {
        console.log(`User element not found for userId: ${userId}`);
    }
});

//10. Read Status 
// Function to mark messages as read
async function markMessagesAsRead(senderId, receiverId) {
    try {
        const response = await apiRequest(`/chats/mark-read`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`, // Add your JWT token here
            },
            body: JSON.stringify({
                senderId: senderId,
                receiverId: receiverId,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Messages marked as read:', data.updatedMessages);
            // Update UI: mark messages as read
            updateMessageStatusToRead(senderId, receiverId); // Implement this function to update message status in the UI
        } else {
            console.error('Failed to mark messages as read:', data.error);
        }
    } catch (error) {
        console.error('Error marking messages as read:', error);
    }
}

// Function to update the message status in the UI
function updateMessageStatusToRead(senderId, receiverId) {
    // Loop through the chat messages in the UI and update those sent by senderId to receiverId as read
    const messageElements = document.querySelectorAll('.message');
    messageElements.forEach((messageElement) => {
        const messageSenderId = messageElement.dataset.senderId;
        const messageReceiverId = messageElement.dataset.receiverId;

        if (messageSenderId === senderId && messageReceiverId === receiverId) {
            messageElement.classList.add('read'); // Mark message as read visually (e.g., add 'read' class)
        }
    });
}


// Event Listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

 
    // Dynamically set the viewport height for better compatibility
    function setViewportHeight() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }

    window.addEventListener('resize', setViewportHeight);
    setViewportHeight();
 





// Function to toggle between panels
function showChatPanel() {
    document.querySelector('.chat-container').classList.add('show-chat');
}

function showUserListPanel() {
    document.querySelector('.chat-container').classList.remove('show-chat');
}

// Add click handlers for toggling
document.querySelector('#chat-list').addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        showChatPanel(); // Switch to chat panel on user click
    }
});

document.querySelector('#chat-user').addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        showUserListPanel(); // Switch back to user list when clicking the chat header
    }
});



// Initialize Chat
loadChatList();