
    let server = "";  // Variable to store the selected server URL
    function setServer(serverType) {
        if (serverType === "render") {
            server = "https://nihongo-backend.onrender.com";
        } else if (serverType === "railway") {
            server = "https://nihongo-backend-env.up.railway.app";
        } else if (serverType === "localhost") {
            server = "http://localhost:3000";
         }
        document.getElementById("serverName").textContent = server;
		fetchServerHealth();
    }
		
	function formatUptime(seconds) {
    // Ensure the input is a valid number
    seconds = parseFloat(seconds);  
    if (isNaN(seconds)) return "Invalid uptime";

    seconds = Math.floor(seconds); // Remove decimal part

    let days = Math.floor(seconds / 86400);
    seconds %= 86400;
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let result = [];
    if (days > 0) result.push(`${days}d`);
    if (hours > 0) result.push(`${hours}h`);
    if (minutes > 0) result.push(`${minutes}m`);
    if (seconds > 0 || result.length === 0) result.push(`${seconds}s`); // Show at least "0s"

    return result.join(" ");
}
	
    function fetchServerHealth() {
    const token = localStorage.getItem("accessToken");  
    if (!token) {
        $("#status-message").removeClass("d-none alert-success").addClass("alert-danger").text("Error: No access token found!");
        return;
    }

    	fetch(`${server}/admin/server-health`, {
        method: "GET",
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) throw new Error("Unauthorized or Invalid Token");
        return response.json();
    })
    .then(data => {
        if (!data.success) throw new Error("Failed to fetch server health");

        const s = data.serverHealth;
        const serverTime = new Date(s.serverTime).toLocaleString();
        const uptime = formatUptime(s.uptime);

        // Update only the text inside existing elements
        $("#server-time").text(serverTime);
        $("#server-uptime").text(uptime);
        $("#server-process-id").text(s.processId);
        $("#server-node-version").text(s.nodeVersion);
        $("#server-memory-usage").html(`${s.memoryUsage} (Free: ${s.freeMemory} / Total: ${s.totalMemory})`);
        $("#server-load-average").text(s.loadAverage.join(", "));
        $("#server-cpu-usage").html(`${s.cpuUsage} (Cores: ${s.cpuCores})`);
        $("#server-network").html(`Sent: <strong>${s.networkStats.totalSent} MB</strong>, Received: <strong>${s.networkStats.totalReceived} MB</strong>`);
  //      $("#server-disk-usage").text(s.diskUsage);
        const diskUsage = s.diskUsage;
		if (diskUsage && typeof diskUsage === "object") {
		    $("#server-disk-usage").text(`Used: ${diskUsage.used} / Total: ${diskUsage.total} (${diskUsage.percentage}%)`);
		} else {
		    $("#server-disk-usage").text("Disk usage data not available");
		}
        $("#server-online-users").text(`${s.onlineUsers} / ${s.totalUsers}`);
        $("#server-notifications").text(s.totalNotifications);
        $("#server-logs").text(s.totalLogs);
        $("#server-active-websockets").text(s.activeWebSockets);
        $("#server-response-time").text(s.responseTime);

        // Update MongoDB status with color
        $("#server-mongodb").text(s.mongoDB)
            .removeClass("text-success text-danger")
            .addClass(s.mongoDB === "Connected" ? "text-success" : "text-danger");

    })
    .catch(err => {
        $("#status-message").removeClass("d-none alert-success").addClass("alert-danger").text("Error: " + err.message);
    });
}


// Auto-refresh every 5 seconds (5000ms)
setInterval(() => {
    if (server) {
        fetchServerHealth();
    }
}, 5000);
 