// Chat Frontend Script (chat.js)
// Tip: senderId always available in senderUserId
//		recipient Id always available in currentChatUserId
// *** Be careful userId sometimes corresponds to something else and recipient/receiver/sender may not be available 

let tokenexpired; 
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
		tokenexpired = true;
		} else {
		  const minutes = Math.floor(remainingTime / 60000);
		  const seconds = Math.floor((remainingTime % 60000) / 1000);
		  countdownElement.textContent = `⏰ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
		  countdownElement.classList.remove("session-expired");
		  countdownElement.classList.add("session-active");
		}
  }, 1000);
}

// Get user details from JWT
const accessToken = localStorage.getItem('accessToken');
if (!accessToken) {
    alert('Authentication token not found. Please log in again.');
    window.location.href = '/nihongo'; // Redirect to login if token is missing
}

// Connect to the server using Socket.io
// Shifted back from config.js
const socket = io(SOCKET_URL, {
  auth: { token: localStorage.getItem('accessToken'), }
});	

socket.on('connect', () => { 
	console.log('🛜 Socket connected to the server with ID:', socket.id); 
	document.getElementById('socket-status').textContent = "🛜 Connected";
	document.getElementById('socket-status').classList.remove('con', 'dis'); document.getElementById('socket-status').classList.add('con');
});


// DOM Elements
const searchUser = document.getElementById('search-users'); // Left panel: 
const chatList = document.getElementById('chat-list'); // Left panel: list of users/chatrooms
const chatWindow = document.getElementById('chat-window'); // Right panel: chat messages
const messageInput = document.getElementById('message-input'); // Message input box
const sendButton = document.getElementById('send-button'); // Send button
const logoutButton = document.getElementById('logoutBtn'); // Logout button
const blockButton = document.getElementById('block-button'); // Block button (to be added in the HTML)

const chatUserElement = document.getElementById('chat-user');
const lastActiveElement = document.getElementById('status');
const userElement2 = chatUserElement

const loader = document.getElementById("image-loader");

// Decode JWT to get user details
// Already available in auth-v2.js

const decoded = decodeJWT(accessToken);
const senderUserId = decoded.userId; // Sender's userId (from JWT)
const senderUsername = decoded.username;

// Set the username in the UI
document.getElementById('myUsername').textContent = senderUsername;

// Helper Function: Fetch API Wrapper
async function fetchAPI(endpoint, method = 'GET', body = null) {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
    };
    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    const response = await apiRequest(`${endpoint}`, options); // Added full URL
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}


// Assuming you're trying to extract a query parameter from the current URL
const url = new URL(self.location.href); // This works in the context of service workers as well
const queryParam = url.searchParams.get('username'); // Replace 'yourQueryKey' with the actual query parameter key

let query = null;
if (queryParam) {	
    query = queryParam; // If the query parameter exists, store it in `query`
    searchUser.value = query;
    loadChatList(query);
}else{
loadChatList(); // Initial call with no query, to load all chatted users
}

// Debounce timeout to control frequent server calls
let debounceTimeout;

// Search Users (Trigger on input change)
function searchUsers() {
    const query = document.getElementById('search-users').value.trim();

    // Clear the previous debounce timeout
    clearTimeout(debounceTimeout);

    // Set a new timeout for debouncing the search
    debounceTimeout = setTimeout(() => {
        loadChatList(query);  // Pass the search query to load the user list
    }, 500); // Delay of 500ms before sending the request
}

let currentChatUserId = null; // Tracks the currently selected recipient user

// 1. Load User List (Left Panel) with Search and Always Show Chatted Users
async function loadChatList(query = '') {
    try {
        chatList.innerHTML = ''; // Clear the chat list

        // Retrieve previously chatted users from localStorage
        const chattedUsers = JSON.parse(localStorage.getItem('chattedUsers')) || [];

        // Create dividers for each section
        const divider1 = document.createElement('hr'); // Divider between sections
        const divider2 = document.createElement('hr'); // Divider between sections

        // Store chatted users' ids in a set for quick lookup
        const chattedUserIds = new Set(chattedUsers.map(user => user.userId));

        // Arrays to hold users
        let searchedUsers = [];
        let alreadyDisplayedChatted = new Set(); // To track chatted users already shown in the top section
        
        // Section 1: Load the top section with chatted users that match the search query
        console.log('🔴🟢🟠 Loaded Chatted Users matching query');
        chattedUsers.forEach(({ username, userId }) => {
            // Only show users from chattedUsers that match the search query
            if (username.toLowerCase().includes(query.toLowerCase())) {
                const userItem = createUserItem(username, userId);
                chatList.appendChild(userItem);
                alreadyDisplayedChatted.add(userId); // Add to displayed set
            }
        });

        // Add divider after the top section
        chatList.appendChild(divider1);

        // Section 2: If there's a search query, load users based on it (excluding already shown users)
        if (query) {
            // Validate search query length (min 3 characters)
            if (query.length < 3) {
                chatList.innerHTML = '<p>Search query length must be >= 3</p>';
                return;
            }

            // Load users based on the search query
            const users = await fetchAPI(`/api/chats/users?username=${query}`);

            // If no users are found, display a message
            if (users.length === 0) {
                chatList.innerHTML = '<p>No users found matching your query.</p>';
            }

            // Collect searched users, excluding already chatted ones
            searchedUsers = users.filter(user => !chattedUserIds.has(user._id));

            // Add searched users to the list
            searchedUsers.forEach((user) => {
                const userItem = createUserItem(user.username, user._id);
                chatList.appendChild(userItem);
            });

            // Add divider after the search results if they exist
            if (searchedUsers.length > 0) {
                chatList.appendChild(divider2);
            }
        }

        // Section 3: Load remaining chatted users (excluding already displayed ones)
        if (!query) {
            // If no query, display all chatted users
            chattedUsers.forEach(({ username, userId }) => {
                if (!alreadyDisplayedChatted.has(userId)) {
                    const userItem = createUserItem(username, userId);
                    chatList.appendChild(userItem);
                }
            });
        }

    } catch (error) {
        chatList.innerHTML = '<p>No users found matching your query</p>';
        console.error('Error loading chat list:', error.message);
    }
}

// Helper function to create a user item element
function createUserItem(username, userId) {
    const userItem = document.createElement('div');
    userItem.textContent = username;
    userItem.classList.add('user-item');
    userItem.dataset.userId = userId; // Store the userId in the dataset

    userItem.addEventListener('click', () => openChat(userId, username)); // Pass userId to openChat
    return userItem;
}

// Track the current room
let currentRoomId = null;

// Function to join a chat room
function joinRoom(recipientUserId) {
    if (currentRoomId) {
        // Leave the previous room
        socket.emit('leave', { roomId: currentRoomId });
        console.log(`Left room: ${currentRoomId}`);
    }
    // Set the new room ID
    currentRoomId = recipientUserId; 
    // Join the new room
    socket.emit('join', { recipientUserId });
    console.log(`Joined room: ${currentRoomId}`);
}

const chatCache = new Map(); // Stores chat history for each user

// 2. Open Chat with a User
async function openChat(recipientUserId, recipientUsername) {
    currentChatUserId = recipientUserId;
    currentChatUsername = recipientUsername;

	saveUser(currentChatUsername);
	
    document.getElementById("chat-user").textContent = `💬 ${recipientUsername}`;
    if (tokenexpired) {
		showPopupMessage('Session Expired');
		chatWindow.innerHTML = `<h1>Session Expired, Refresh the page.</h1>
													<img src="/nihongo/img/icon.png" />	`;
		return 
		}

	
	chatWindow.innerHTML = ` <div class="loader-container"> <div class="loader"></div> <span>Loading Chats...</span> </div>	`;
    

    // Join the chat room
    joinRoom(recipientUserId);

    // Check if chat history is cached
    if (chatCache.has(recipientUserId)) {
        showNotification(`⚡ Using Cached Chat for ${recipientUsername}`);
        renderMessages(chatCache.get(recipientUserId));
    } else {
        showNotification(`📡 Fetching Chat History for ${recipientUsername}`);
        try {
            let messages = [];

            // Load from localStorage if available
            const storedData = localStorage.getItem(`chat_${recipientUserId}`);
            if (storedData) {
                showNotification(`🔑 Loading Encrypted Chat Cache for ${recipientUsername}`);
                messages = await Promise.all(JSON.parse(storedData).map(async msg => JSON.parse(await decryptMessage(msg))));
            } else {
                // Fetch from API if no cache is available
                showNotification('📡 Fetching Chat history from server')
                messages = await fetchAPI(`/api/chats/history/${senderUserId}/${recipientUserId}`);

                // Cache encrypted messages in localStorage
                const encryptedMessages = await Promise.all(messages.map(msg => encryptMessage(JSON.stringify(msg))));
                localStorage.setItem(`chat_${recipientUserId}`, JSON.stringify(encryptedMessages));
            }

            chatCache.set(recipientUserId, messages);
            renderMessages(messages);
        } catch (error) {
            console.error('Error loading chat messages:', error.message);
            chatMessagesContainer.innerHTML = '<p>Error loading messages. Please try again later.</p>';
        }
    }

    // Fetch user availability
    checkUserAvailability(currentChatUserId);

    // Mark messages as read
    socket.emit('markAsRead', { senderId: senderUserId, receiverId: currentChatUserId });
    updateBlockButton();
    // Show or hide block button
    blockButton.style.display = senderUserId !== recipientUserId ? 'inline-block' : 'none';
    blockButton.onclick = () => toggleBlockUser();
}

// Render messages
async function renderMessages(messages) {
	// Clear the chat window for message display 
    chatWindow.innerHTML = `<div class="chat-messages"></div>`;
    const chatMessagesContainer = chatWindow.querySelector('.chat-messages');
    
    chatMessagesContainer.innerHTML = messages.length ? '' : '<p>No messages yet.</p>';

    for (const message of messages) {
        // Ensure sender and receiver are objects
        //if (typeof message.sender === 'string') {
        //    message.sender = { _id: message.sender };
      //  }
      //  if (typeof message.receiver === 'string') {
    //        message.receiver = { _id: message.receiver };
 //       }

        const isSelf = message.sender._id === senderUserId;
        displayMessage(message, isSelf);
    }
}

			async function saveUser(currentChatUsername) {
            if (currentChatUsername) {
                const chattedUsers = JSON.parse(localStorage.getItem('chattedUsers')) || [];

                if (!chattedUsers.some(user => user.userId === currentChatUserId)) {
                    chattedUsers.push({
                        username: currentChatUsername,
                        userId: currentChatUserId
                    });
                    localStorage.setItem('chattedUsers', JSON.stringify(chattedUsers));
                }
            } else {
                console.warn("currentChatUsername is undefined. Skipping localStorage update.");
            }               
}

// Append refreshed messages without cleaning previous one
async function appendMessages(messages) {
    for (const message of messages) {
        // Ensure sender and receiver are objects
        if (typeof message.sender === 'string') {
            message.sender = { _id: message.sender };
        }
        if (typeof message.receiver === 'string') {
            message.receiver = { _id: message.receiver };
        }
        const isSelf = message.sender._id === senderUserId;
        displayMessage(message, isSelf);
    }
}          


// Refresh chat with latest messages
async function refreshChat() {
    if (!currentChatUserId) {
        showNotification("⚠️ No chat selected to refresh.");
        return;
    }

    showNotification(`🔄 Refreshing chat with ${currentChatUsername}`);

    try {
        // Fetch latest messages from server
        const latestMessages = await fetchAPI(`/api/chats/history/${senderUserId}/${currentChatUserId}`);
        // Get cached messages
        const cachedMessages = chatCache.get(currentChatUserId) || [];
        // Filter out messages that are already in the cache
        const newMessages = latestMessages.filter(newMsg =>
            !cachedMessages.some(cachedMsg => cachedMsg._id === newMsg._id)
        );
        if (newMessages.length === 0) {
            showNotification(`✅ Chat is already up to date with ${currentChatUsername}`);
            return;
        }
        // Append new messages to cache
        const updatedMessages = [...cachedMessages, ...newMessages];
        chatCache.set(currentChatUserId, updatedMessages);
        // Encrypt and store updated messages in localStorage
        const encryptedMessages = await Promise.all(updatedMessages.map(msg => encryptMessage(JSON.stringify(msg))));
        localStorage.setItem(`chat_${currentChatUserId}`, JSON.stringify(encryptedMessages));
        // Re-render messages
        appendMessages(newMessages);
        showNotification("📩 New messages loaded successfully.");

    } catch (error) {
        console.error("Error refreshing chat:", error);
        showNotification("❌ Failed to refresh chat. Please try again.");
    }
}

// 3. Display Messages
function displayMessage(message, isSelf) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", isSelf ? "self" : "other");

    // Create timestamp
    const formattedDate = new Date(message.timestamp).toLocaleDateString([], {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    const formattedDateTime = `${formattedDate}, ${formattedTime}`;
    const timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.textContent = formattedDateTime;

    // Read Receipt (only for sender's messages)
    const readReceipt = document.createElement("span");
    readReceipt.classList.add("read-receipt");
    if (isSelf) {
        readReceipt.textContent = message.isRead ? "✔✔" : "✔";
    }

    // Check message type (text or image)
    if (message.type === "image") {
        const imageElement = document.createElement("img");
        imageElement.src = message.fileUrl;
        imageElement.classList.add("chat-image");
        imageElement.alt = "Sent Image";
        imageElement.onclick = () => window.open(message.fileUrl, "_blank"); // Open in new tab

        messageDiv.appendChild(imageElement);
    } else {
        // Create text message element
        const messageText = document.createElement("p");
        messageText.textContent = message.message;
        messageDiv.appendChild(messageText);
    }

    // Append timestamp & read receipt
    messageDiv.appendChild(timestamp);
    messageDiv.appendChild(readReceipt);

    // Append to chat window
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Requires socket defined beforehand 
function intializeSocket() {
	if (socket) {
		// Event Listeners
		sendButton.addEventListener('click', sendMessage);
		messageInput.addEventListener('keydown', (e) => {
		    if (e.key === 'Enter') sendMessage();
		});


   const imageButton = document.getElementById("image-button");
const imageInput = document.getElementById("image-input");
const imagePreviewContainer = document.getElementById("image-preview-container");
const imagePreview = document.getElementById("image-preview");
const cancelPreviewButton = document.getElementById("cancel-preview");

let selectedImage = null;

// Open file picker when image button is clicked
imageButton.addEventListener("click", () => {
    imageInput.click();
});

// Cancel image preview
cancelPreviewButton.addEventListener("click", () => {
    selectedImage = null;
    imagePreviewContainer.style.display = "none";
    imageInput.value = ""; // Reset file input
});

// Handle image selection
imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        selectedImage = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreviewContainer.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Send Message via WebSocket
async function sendMessage() {
    if (!currentChatUserId) return;

    let imageUrl = null;

    // **Send Text Message**
    const messageText = messageInput.value.trim();
    if (messageText) {
        const message = {
            senderUsername,
            receiver: currentChatUserId,
            message: messageText,
            type: "text",
        };

        try {
            socket.emit("sendMessage", message, (response) => {
                messageInput.value = ""; // Clear input after sending
                if (response?.error) {
                    alert(response.error);
                }
            });
        } catch (error) {
            console.error("Error sending message:", error.message);
        }
    }

    // **Send Image**
    if (selectedImage) {
        showNotification("Uploading image...");
        loader.style.display = "block";

        try {
            const formData = new FormData();
            formData.append("image", selectedImage);

            const uploadResponse = await apiRequest("/api/upload", {
                method: "POST",
                headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}` 
            },
                body: formData,
            });

            const data = await uploadResponse.json();
            if (!data.imageUrl) {
                showNotification("Image upload failed!");
                loader.style.display = "none";
                showPopupMessage(data.message || "Access denied.");
                return;
            }
            
                 if (data?.error) {
                 	loader.style.display = "none";
                    alert(data.error);
                }

            imageUrl = data.imageUrl;

            const imagemessage = {
                senderUsername,
                receiver: currentChatUserId,
                message: "[Image]", // Placeholder text
                type: "image",
                fileUrl: imageUrl,
        	};
        
            socket.emit("sendMessage", imagemessage, (response) => {              
                if (response?.error) {
                    alert(response.error);
                }
            });
            
            // Reset selected image and preview
            selectedImage = null;
            loader.style.display = "none";
            imagePreviewContainer.style.display = "none";
            imageInput.value = ""; // Reset input field
        } catch (error) {
        	loader.style.display = "none";
        	showNotification("Error: File size exceeded or too many requests");
            console.error("Error uploading image:", error.message);
        }
    }
}

// 5️⃣ Receive Messages via WebSocket and Update Cache
socket.on('receiveMessage', async (message) => {
    console.log('📥 Socket msg received from server:', message);

    if (message.receiver === senderUserId || message.sender === senderUserId) {
        typingIndicator.style.display = 'none';
        
        // Display message in UI
        displayMessage(message, message.sender === senderUserId);

        // Format message correctly
        const formattedMessage = {
            ...message,
            sender: { _id: message.sender },
            receiver: { _id: message.receiver }
        };

        // 📝 Update Chat Cache
        const currentCache = chatCache.get(currentChatUserId) || [];

        if (formattedMessage._id && !currentCache.some(cachedMsg => cachedMsg._id === formattedMessage._id)) {
            const updatedCache = [...currentCache, formattedMessage];
            chatCache.set(currentChatUserId, updatedCache);

            // Encrypt and store messages in localStorage
            const encryptedMessages = await Promise.all(
                updatedCache.map(msg => encryptMessage(JSON.stringify(msg)))
            );
            localStorage.setItem(`chat_${currentChatUserId}`, JSON.stringify(encryptedMessages));
        }
    }
});

		
		// 6. Handle Typing Indicator
		let typingTimeout;
		let canEmitTyping = true; // Controls when to allow sending "typing" event
		
		const typingIndicator = document.getElementById('typing-indicator');
		
		messageInput.addEventListener('input', () => {
		    if (currentChatUserId && senderUserId !== currentChatUserId) {
		        if (canEmitTyping && socket) {
		            socket.emit('typing', { senderId: senderUserId, receiverId: currentChatUserId });
		            canEmitTyping = false; // Prevent immediate re-emits
		
		            // Allow re-emitting after 1.5 seconds
		            setTimeout(() => {
		                canEmitTyping = true;
		            }, 1500);
		        }
		        clearTimeout(typingTimeout); // Reset timeout on every keystroke
		    }
		});		
					
		// 7. Typing Indicator Display
		if (socket) {
	    socket.on('typing', ({ senderId }) => {
	       // console.log('Typing:', senderId); // Debugging
	        
	        if (senderId !== senderUserId && currentChatUserId === senderId) {
				updateStatus('Typing');
	            if (typingIndicator.style.display !== 'flex') {
	                typingIndicator.style.display = 'flex';
	                typingIndicator.innerHTML = `
	                    <div class="typing-dots">
	                        <span></span><span></span><span></span>
	                    </div>
	                `; // Insert only if it's not already there
	            }        
	        // Reset timeout each time to avoid unnecessary resets
	        clearTimeout(typingTimeout);
	        typingTimeout = setTimeout(() => {
				updateStatus('Online');
	            typingIndicator.style.display = 'none';
	        }, 3000);
		}
	    });
	}
		
		
		//8. Availability-Pre
		// Emit 'userBusy' when the user switches tabs or becomes inactive
		document.addEventListener('visibilitychange', () => {
			if (socket) {
			    if (document.hidden) {
			        // Emit userBusy when the tab is switched
			        socket.emit('userBusy', { senderUserId});
					//console.log('User Busy emitted.');
			    } else {
			        //Optionally, emit 'userOnline' when they return
					// Mark messages as read
			        senderId=senderUserId; receiverId=currentChatUserId;
			   	 socket.emit('markAsRead', { senderId, receiverId });
			
			        socket.emit('userOnline', { senderUserId });
			        //console.log('User Online emitted.');
			    }
			}
		});
		// Emit 'userOffline' when the user leaves or closes the website
		window.addEventListener('beforeunload', () => {
			if (socket) {
		    socket.emit('userOffline', { senderUserId});
		    //console.log('User Offline emitted.');
			}
		});
		
		// 9. Availability 
			socket.on('userOnline', ({senderUserId}) => {
			    //console.log(senderUserId, 'is online');
			  
			    userId=senderUserId;
			    const userElement = document.querySelector(`[data-user-id='${userId}']`);
			    if (userElement) {
		    		userElement.classList.remove('offline', 'busy', 'online'); userElement.classList.add('online');
			    }else{'🤯🤯🤯'}
			    if (userElement2 && currentChatUserId === senderUserId) {
		    		userElement2.classList.remove('offline', 'busy', 'online'); userElement2.classList.add('online');
					updateStatus('Online');
			    }
			
			});
			
			socket.on('userOffline', ({senderUserId}) => {
				//console.log(senderUserId, 'is offline');
				updateStatus('Offline');
				userId=senderUserId;
			    const userElement = document.querySelector(`[data-user-id='${userId}']`);
			    if (userElement) {
		    		userElement.classList.remove('offline', 'busy', 'online'); userElement.classList.add('offline');
			    }
			    if (userElement2 && currentChatUserId === senderUserId) {
		    		userElement2.classList.remove('offline', 'busy', 'online'); userElement2.classList.add('offline');
		            checkUserAvailability(currentChatUserId);
			    }
			});
			
			socket.on('userBusy', ({senderUserId}) => {
				//console.log(senderUserId, 'is busy');
			
				userId=senderUserId;
			    const userElement = document.querySelector(`[data-user-id='${userId}']`);
			    if (userElement) {
		    		userElement.classList.remove('offline', 'busy', 'online'); userElement.classList.add('busy');
			    }
			    if (userElement2 && currentChatUserId === senderUserId) {
		    		userElement2.classList.remove('offline', 'busy', 'online'); userElement2.classList.add('busy');
					updateStatus('Busy');
			    }			    
			});
			
			socket.on('messagesRead', (data) => {		
		   const { chatId, readerId } = data;
	   //	console.log(`messageRead received lol 😂, chatId: ${chatId} readerId: ${readerId} `);
			if (currentChatUserId === readerId &&  senderUserId ===chatId) {	
		   	 console.log(`User ${readerId} read messages in chat ${chatId}`);	
				lol();  // Lol 😂 function to update message status in the UI	
			}
		});
			
		} else {
			console.log('socket:', socket);
			console.log('🔴 Socket undefined: Likely due to socket initialisation asynchronous');
			}
			
			
			socket.on('disconnect', (reason) => {
		    console.log('⚠️ Socket disconnected:', reason);
		    document.getElementById('socket-status').textContent = "⚠️ Disconnected";
		    document.getElementById('socket-status').classList.remove('con', 'dis');
		    document.getElementById('socket-status').classList.add('dis');
		});
		socket.on('connect_error', (error) => {
		    console.error('⚠️ Connection failed:', error);
		    document.getElementById('socket-status').textContent = "⚠️ Connection Failed";
		    document.getElementById('socket-status').classList.remove('con', 'dis');
		    document.getElementById('socket-status').classList.add('dis');
		});
		socket.on('reconnect', (attemptNumber) => {
		    console.log(`🛜 Reconnected to server, attempt #${attemptNumber}`);
		    document.getElementById('socket-status').textContent = `🛜 Reconnected (Attempt ${attemptNumber})`;
		    document.getElementById('socket-status').classList.remove('con', 'dis');
		    document.getElementById('socket-status').classList.add('con');
		});
		socket.on('reconnect_error', (error) => {
		    console.error('⚠️ Reconnection failed:', error);
		    document.getElementById('socket-status').textContent = "⚠️ Reconnection Failed";
		    document.getElementById('socket-status').classList.remove('con', 'dis');
		    document.getElementById('socket-status').classList.add('dis');
		});
}

		
// 10. Toggle Block User
async function toggleBlockUser() {
	const isBlocked = blockButton.dataset.blocked === 'true'; // Read status from dataset
    const action = isBlocked ? 'unblock-user' : 'block-user';
    
	try {
        // Constructing the request body with the blockUserId
        const requestBody = {
            blockUserId: currentChatUserId, // The ID of the user to block
            unblockUserId: currentChatUserId // The ID of the user to block
        };

        // Sending the request to the server with the correct endpoint and data
        const response = await apiRequest(`/api/chats/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}` 
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (response.ok) {
		    blockButton.textContent = isBlocked ? 'Block' : 'Unblock';
		    blockButton.dataset.blocked = !isBlocked;
		
		    // Leave the room first
		    socket.emit('leaveRoom', { currentChatUserId });
		
		    alert(`${currentChatUsername} has been ${isBlocked ? 'unblocked' : 'blocked'}.`);
		
		    // If unblocked, rejoin the room
		    if (isBlocked) {
				recipientUserId = currentChatUserId;
			    if (socket) {
			    socket.emit('join', {recipientUserId });
    			} else { console.error('Join emit failed to socket with user:', recipientUserId ); }
			
		    }
		
		    // Optionally remove the user from the chat list or close the chat
		    // chatWindow.innerHTML = `<p>You have blocked this ${currentChatUsername}</p>`;
        } else {
            alert(data.error || 'Error blocking user.');
        }
    } catch (error) {
        console.error('Error blocking user:', error.message);
    }
}

//11. Read Status 
// Function to mark messages as read
async function markMessagesssssAsRead(senderId, receiverId) {
    try {
        const response = await apiRequest(`/api/chats/mark-read`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Add your JWT token here
            },
            body: JSON.stringify({
                senderId: senderUserId,
                receiverId: currentChatUserId,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Messages marked as read:', data.updatedMessages);
     	   // Notify sender that their messages were read

       	 io.to(senderId).emit('messagesRead', {  readerId, chatId });
        } else {
            console.error('Failed to mark messages as read:', data.error);
        }
    } catch (error) {
        console.error('Error marking messages as read:', error);
    }
}


// Function to check block-status
async function updateBlockButton() {
    if (!currentChatUserId) {
        console.error("Error: currentChatUserId is undefined");
        return;
    }

    try {
        const response = await apiRequest(`/api/chats/block-status/${currentChatUserId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Add your token here
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }        
        const data = await response.json();
        
        if (typeof data.isBlocked === "undefined") {
            throw new Error("Invalid response from server");
        }

        blockButton.textContent = data.isBlocked ? "Unblock" : "Block";
        blockButton.dataset.blocked = data.isBlocked.toString(); // Ensure consistency
    } catch (error) {
        console.error("Error checking block status:", error);
        blockButton.style.display = "none"; // Hide button on error
    }
}


// Function to check user availability and update UI
async function checkUserAvailability(userId) {
    try {
        // Send request to the backend to check user availability
        const response = await apiRequest(`/api/chats/availability/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Add your token here
            }
        });

        // Check if the user exists and the response is OK
        if (!response.ok) {
            throw new Error('User not found or server error');
        }
        const data = await response.json();

        // Based on the user's availability, update the class list
        if (data.isOnline) {
        	updateStatus('Online');
            chatUserElement.classList.add('online');
            chatUserElement.classList.remove('offline');
        } else {
            chatUserElement.classList.add('offline');
            chatUserElement.classList.remove('online');
        }
		if (lastActiveElement) {
		    if (chatUserElement.classList.contains('offline')) {
		        const lastActiveDate = new Date(data.lastActive);
				const now = new Date();
				
				// Format time part
				const lastActiveTime = lastActiveDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true});
				const dateFormatter = new Intl.DateTimeFormat([], { year: 'numeric', month: '2-digit', day: '2-digit' });
				
				// Compare today and yesterday using Date objects for more precision
				const isToday = lastActiveDate.toDateString() === now.toDateString();
				const isYesterday = lastActiveDate.getDate() === now.getDate() - 1 && lastActiveDate.getMonth() === now.getMonth() && lastActiveDate.getFullYear() === now.getFullYear();
				
				let displayText;
				
				if (isToday) {
				    displayText = `Last Seen: ${lastActiveTime}`;
				} else if (isYesterday) {
				    displayText = `Last Seen: Yesterday, ${lastActiveTime}`;
				} else {
				    displayText = `Last Seen: ${dateFormatter.format(lastActiveDate)} ${lastActiveTime}`;
				}			
				lastActiveElement.textContent = displayText;
		    }		
		}

    } catch (error) {
        console.error('Error checking user availability:', error);
    }
}


// Function to update status, change text color, and make it bold if online
function updateStatus(status) {
    lastActiveElement.style.transition = 'opacity 0.3s ease-in-out'; // Smooth transition
    lastActiveElement.style.opacity = '0'; // Fade out

    setTimeout(() => {
        if (status === 'Online') {
            lastActiveElement.textContent = 'Online';
            lastActiveElement.style.color = 'green';
            lastActiveElement.style.fontWeight = 'bold';
        } else if (status === 'Busy') {
            lastActiveElement.textContent = 'User is Busy';
            lastActiveElement.style.color = 'yellow';
            lastActiveElement.style.fontWeight = 'normal';
        } else if (status === 'Offline') {
            lastActiveElement.textContent = 'Offline';
            lastActiveElement.style.color = 'red';
            lastActiveElement.style.fontWeight = 'normal';
        } else if (status === 'Typing') {
            lastActiveElement.textContent = 'User is Typing . . .';
            lastActiveElement.style.color = '#DD86FF';
            lastActiveElement.style.fontWeight = 'normal';
        }
        
        lastActiveElement.style.opacity = '1'; // Fade in
    }, 300); // Wait for fade-out before changing text
}

function lol() {
    // Find all sender (self) messages in the chat window
    document.querySelectorAll('.message.self .read-receipt').forEach(readReceipt => {
        // Update only messages that are still marked as unread
        if (readReceipt.textContent === '✔') {
            readReceipt.textContent = '✔✔'; // Change to double tick (read)
        }
    });
}


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

document.querySelector('.back-btn').addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        showUserListPanel(); // Switch back to user list when clicking the chat header
    }
});

const savedImage = localStorage.getItem('userProfilePic');
	    document.getElementById('myavatar').src = savedImage || '/nihongo/img/user.png' ; 
	

// 🔔 Show notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = "position: fixed; top: 70px; right: 10px; background: #007bff; color: white; padding: 8px; border-radius: 4px; z-index: 1000;";  
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// 🔐🔐🔐 Secure Chat Cache Encryption & Storage

async function generateKey() {
    if (sessionStorage.getItem('encryptionKey')) return;

    const key = await crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    const exportedKey = new Uint8Array(await crypto.subtle.exportKey("raw", key));
    sessionStorage.setItem('encryptionKey', JSON.stringify(Array.from(exportedKey))); // Store as JSON array
}
generateKey(); // Generate key on page load

async function getKey() {
    const rawKey = JSON.parse(sessionStorage.getItem('encryptionKey'));
    const keyBuffer = new Uint8Array(rawKey); // Convert back to Uint8Array
    return await crypto.subtle.importKey("raw", keyBuffer, { name: "AES-GCM" }, true, ["encrypt", "decrypt"]);
}

async function encryptMessage(text) {
    const key = await getKey();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // Random IV for security
    const encodedText = new TextEncoder().encode(text);
    const encryptedData = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encodedText);

    return JSON.stringify({
        iv: Array.from(iv), // Store IV as array
        data: Array.from(new Uint8Array(encryptedData)) // Store encrypted data as array
    });
}

async function decryptMessage(encrypted) {
    try {
        const key = await getKey();
        const parsed = JSON.parse(encrypted);
        const iv = new Uint8Array(parsed.iv);
        const encryptedData = new Uint8Array(parsed.data);

        const decryptedData = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, encryptedData);
        return new TextDecoder().decode(decryptedData);
    } catch (error) {   	
        console.error('Decryption failed:', error);
        return null;
    }
}

// For single key cache localstorage
/*
async function saveChatCache() {
    const encryptedChats = {};
    for (const [userId, messages] of chatCache.entries()) {
        encryptedChats[userId] = await Promise.all(messages.map(msg => encryptMessage(JSON.stringify(msg))));
    }
    localStorage.setItem('chatCache', JSON.stringify(encryptedChats));
}

async function loadChatCache() {
    const storedChats = localStorage.getItem('chatCache');
    if (!storedChats) return;

    const encryptedChats = JSON.parse(storedChats);
    for (const [userId, encryptedMessages] of Object.entries(encryptedChats)) {
        chatCache.set(userId, await Promise.all(encryptedMessages.map(async msg => JSON.parse(await decryptMessage(msg)))));
    }
}

loadChatCache(); // Load chat cache on page load	
*/
	
// Load chat cache from localStorage on page load
async function loadChatCache() {
    showNotification("🔑 Loading Encrypted Chat Cache...");

    let decryptionFailed = false; // Track failures

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("chat_")) {
            const userId = key.split("_")[1];
            const storedData = localStorage.getItem(key);

            if (storedData) {
                try {
                    // Attempt to decrypt messages
                    const decryptedMessages = await Promise.all(
                        JSON.parse(storedData).map(async msg => {
                            const decrypted = await decryptMessage(msg);
                            if (decrypted === null) throw new Error("Decryption failed");
                            return JSON.parse(decrypted);
                        })
                    );

                    chatCache.set(userId, decryptedMessages);
                } catch (error) {
                    console.error(`Failed to decrypt chat for ${userId}:`, error);

                    // Remove corrupted chat data
                    localStorage.removeItem(key);
                    console.warn(`Removed corrupted chat cache for user ${userId}`);

                    decryptionFailed = true; // Mark failure
                }
            }
        }
    }

    // Adjust final message
    if (decryptionFailed) {
        showNotification("⚠️ Some chats failed to load due to decryption errors.");
    } else {
        showNotification("✅ Chat Cache Loaded Successfully.");
    }
}

// Call function to load chat cache on page load
window.addEventListener("load", loadChatCache);

	
document.addEventListener("DOMContentLoaded", () => {
    const emojiButton = document.getElementById("emoji-button");
    const chatInput = document.getElementById("message-input");
    const emojiPickerContainer = document.getElementById("emoji-picker");

    const picker = new EmojiMart.Picker({
        onEmojiSelect: (emoji) => {
            chatInput.value += emoji.native;
            chatInput.focus();
        },
        theme: 'light', // or 'dark'
    });

    emojiPickerContainer.appendChild(picker);

    emojiButton.addEventListener("click", () => {
        emojiPickerContainer.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!emojiPickerContainer.contains(event.target) && event.target !== emojiButton) {
            emojiPickerContainer.classList.add("hidden");
        }
    });
});
	


	
intializeSocket();
socket.on('error', (err) => { console.error('🔴 Socket Error:', err);	});
