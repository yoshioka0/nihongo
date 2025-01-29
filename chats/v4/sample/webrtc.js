const fileInput = document.getElementById('fileInput');
const dataChannelReceive = document.getElementById('dataChannelReceive');
const startButton = document.getElementById('startButton');
const sendFileButton = document.getElementById('sendFileButton');
const closeButton = document.getElementById('closeButton');

let localConnection, sendChannel, receiveChannel, socket;

startButton.onclick = startConnection;
sendFileButton.onclick = sendFile;
closeButton.onclick = closeConnection;

function startConnection() {
  const servers = null;
  localConnection = new RTCPeerConnection(servers);

  // Data channel setup
  sendChannel = localConnection.createDataChannel('fileDataChannel');
  sendChannel.onopen = onChannelStateChange;
  sendChannel.onclose = onChannelStateChange;

  // ICE candidate handling
  localConnection.onicecandidate = (event) => {
    if (event.candidate) {
      sendMessage({ type: 'candidate', candidate: event.candidate });
    }
  };

  localConnection.ondatachannel = (event) => {
    receiveChannel = event.channel;
    receiveChannel.onmessage = handleReceivedData;
    receiveChannel.onopen = onChannelStateChange;
    receiveChannel.onclose = onChannelStateChange;
  };

  // Connect to signaling server
  socket = new WebSocket('ws://localhost:3000');
  socket.onmessage = handleSignalingMessage;

  // Create an offer
  localConnection.createOffer().then((offer) => {
    localConnection.setLocalDescription(offer);
    sendMessage({ type: 'offer', offer });
  });

  startButton.disabled = true;
}

function sendMessage(message) {
  socket.send(JSON.stringify(message));
}

function handleSignalingMessage(message) {
  const data = JSON.parse(message.data);

  if (data.type === 'offer') {
    localConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
    localConnection.createAnswer().then((answer) => {
      localConnection.setLocalDescription(answer);
      sendMessage({ type: 'answer', answer });
    });
  } else if (data.type === 'answer') {
    localConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
  } else if (data.type === 'candidate') {
    localConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
  }
}

function sendFile() {
  const file = fileInput.files[0];
  if (!file) {
    console.error('No file selected.');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    sendChannel.send(reader.result);
    console.log('File sent:', file.name);
  };
  reader.readAsArrayBuffer(file);
}

function handleReceivedData(event) {
  console.log('File received.');
  const receivedData = event.data;

  const blob = new Blob([receivedData]);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'received_file';
  link.textContent = 'Download the received file';
  document.body.appendChild(link);
}

function closeConnection() {
  console.log('Closing connection.');
  sendChannel.close();
  receiveChannel.close();
  localConnection.close();

  startButton.disabled = false;
  fileInput.disabled = true;
  sendFileButton.disabled = true;
  closeButton.disabled = true;
}

function onChannelStateChange() {
  const readyState = sendChannel.readyState;
  if (readyState === 'open') {
    fileInput.disabled = false;
    sendFileButton.disabled = false;
    closeButton.disabled = false;
  } else {
    fileInput.disabled = true;
    sendFileButton.disabled = true;
    closeButton.disabled = true;
  }
}