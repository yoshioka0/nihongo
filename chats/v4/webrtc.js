// Get elements from HTML
const attachImageButton = document.getElementById('attachImage');
const imageInput = document.getElementById('imageInput');
const startConnectionButton = document.getElementById('startConnectionButton');
const connectionStatus = document.getElementById('connectionStatus');
const fileProgress = document.getElementById('fileProgress');
const fileStatus = document.getElementById('fileStatus');

// WebRTC variables
let peerConnection;
let dataChannel;
let isInitiator = false;

const config = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] // STUN server
};

// Function to create peer connection
function createPeerConnection() {
    peerConnection = new RTCPeerConnection(config);

    // Function to handle ICE candidates
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            console.log('Sending ICE candidate:', event.candidate);
            // Ensure senderId and receiverId are included when emitting ICE candidate
            socket.emit('ice-candidate', {
                senderId: senderUserId,  // Replace with actual sender ID
                receiverId: currentChatUserId,  // Replace with actual receiver ID
                candidate: event.candidate
            });
        }
    };

    peerConnection.oniceconnectionstatechange = () => {
        updateConnectionStatus(`ICE connection state: ${peerConnection.iceConnectionState}`);
    };
}

// Function to create and send an offer
function createOffer() {
    isInitiator = true;
    createPeerConnection();

    updateConnectionStatus('Creating offer...');

    // Create the data channel just before the offer
    dataChannel = peerConnection.createDataChannel('fileTransfer');
    dataChannel.onopen = () => {
        console.log('Data channel is open');
        updateConnectionStatus('Data channel is open');
        attachImageButton.disabled = false;  // Enable the file attachment button
    };
    dataChannel.onclose = () => updateConnectionStatus('Data channel closed');
    dataChannel.onmessage = handleFileMessage;

    // Create the offer
    peerConnection.createOffer()
        .then((offer) => {
            console.log('Offer created:', offer);
            return peerConnection.setLocalDescription(offer);
        })
        .then(() => {
            console.log('Sending offer to server:', peerConnection.localDescription);
            socket.emit('offer', {
                senderId: senderUserId,
                receiverId: currentChatUserId,
                offer: peerConnection.localDescription
            });
        })
        .catch((error) => {
            console.error('Error creating offer:', error);
        });
}

// Function to handle incoming offer
function handleOffer(offer) {
    createPeerConnection();

    peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
        .then(() => {
            // Create the data channel on the answerer's side
            dataChannel = peerConnection.createDataChannel('fileTransfer');
            dataChannel.onopen = () => {
                console.log('Data channel is open');
                updateConnectionStatus('Data channel is open');
                attachImageButton.disabled = false;  // Enable the file attachment button
            };
            dataChannel.onclose = () => updateConnectionStatus('Data channel closed');
            dataChannel.onmessage = handleFileMessage;

            return peerConnection.createAnswer();
        })
        .then((answer) => {
            return peerConnection.setLocalDescription(answer);
        })
        .then(() => {
            socket.emit('answer', peerConnection.localDescription);
        })
        .catch((error) => {
            console.error('Error handling offer:', error);
        });
}

// Function to handle incoming answer
function handleAnswer(answer) {
    peerConnection.setRemoteDescription(new RTCSessionDescription(answer))
        .catch((error) => {
            console.error('Error handling answer:', error);
        });
}

// Function to handle ICE candidate
function handleICECandidate(candidate) {
    peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
        .catch((error) => {
            console.error('Error adding ICE candidate:', error);
        });
}

// Handle the file input trigger
attachImageButton.addEventListener('click', () => {
    if (dataChannel && dataChannel.readyState === 'open') {
        imageInput.click(); // Trigger file input dialog
    } else {
        updateFileStatus('Error: Data channel is not open. Wait for connection to be established.');
    }
});

// Handle file selection and send it
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        updateFileStatus(`Selected file: ${file.name}`);
        if (dataChannel && dataChannel.readyState === 'open') {
            sendFile(file);  // Send the file through WebRTC if data channel is open
        } else {
            console.error('Data channel is not open');
            updateFileStatus('Error: Data channel is not open. Wait for connection to be established.');
        }
    }
});

// Function to send the file in chunks
function sendFile(file) {
    if (dataChannel.readyState !== 'open') {
        console.error('Data channel not open, retrying...');
        setTimeout(() => sendFile(file), 1000);  // Retry after 1 second
        return;
    }

    const chunkSize = 16384; // 16KB chunk size
    let offset = 0;
    const fileReader = new FileReader();

    fileReader.onload = function(event) {
        if (event.target.readyState === FileReader.DONE) {
            dataChannel.send(event.target.result);
            offset += event.target.result.byteLength;

            // Update file progress
            const progress = Math.min((offset / file.size) * 100, 100);
            updateFileProgress(progress);

            if (offset < file.size) {
                readNextChunk();
            } else {
                updateFileStatus('File transfer complete');
                updateFileProgress(100);
            }
        }
    };

    function readNextChunk() {
        const slice = file.slice(offset, offset + chunkSize);
        fileReader.readAsArrayBuffer(slice);
    }

    updateFileStatus(`Sending file: ${file.name}`);
    updateFileProgress(0); // Reset progress bar
    readNextChunk();
}

// Function to handle receiving file data
function handleFileMessage(event) {
    console.log('Received file chunk');
    const arrayBuffer = event.data;
    const blob = new Blob([arrayBuffer]);
    const imageURL = URL.createObjectURL(blob);

    // Display the image in the chat window
    const img = document.createElement('img');
    img.src = imageURL;
    img.style.maxWidth = '100%'; // Optional: Set max width to fit in the chat
    chatWindow.appendChild(img);

    updateFileStatus('File received');
}

// Function to initiate the connection
startConnectionButton.addEventListener('click', () => {
    if (!isInitiator) {
        createOffer(); // If not initiator, create an offer
    }
});

// WebRTC signaling: Listening to socket events
socket.on('offer', (offer) => {
    handleOffer(offer);
});

socket.on('answer', (answer) => {
    handleAnswer(answer);
});

socket.on('ice-candidate', (candidate) => {
    handleICECandidate(candidate);
});

// Start WebRTC
function initWebRTC() {
    // Setup UI
    setupFileSharingUI();
}

// Setup file sharing UI for initiating WebRTC
function setupFileSharingUI() {
    //attachImageButton.disabled = true;  // Initially disable the attach button

    // Button to initiate the WebRTC connection
    startConnectionButton.addEventListener('click', () => {
        if (!isInitiator) {
            createOffer(); // If not initiator, create an offer
        }
    });
}

initWebRTC();

// Utility functions to update the UI with status and progress
function updateConnectionStatus(status) {
    connectionStatus.textContent = status;
}

function updateFileProgress(progress) {
    fileProgress.style.width = `${progress}%`;
}

function updateFileStatus(status) {
    fileStatus.textContent = status;
}

//************* WebRTC CHECK *************//
// Function to check WebRTC and Data Channel support
function checkWebRTCSupport() {
    const connectionStatus = document.getElementById('connectionStatus');

    if (window.RTCPeerConnection && window.RTCDataChannel) {
        // WebRTC and Data Channel are supported
        connectionStatus.textContent = 'WebRTC and Data Channel are supported.';
        connectionStatus.style.color = 'green';
    } else {
        // WebRTC or Data Channel are not supported
        connectionStatus.textContent = 'WebRTC and/or Data Channel are not supported in your browser.';
        connectionStatus.style.color = 'red';
    }
}

// Call the function to check support
checkWebRTCSupport();