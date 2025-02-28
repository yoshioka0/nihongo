showAlert('This method is temporarily disabled!');

//document.getElementById("otpSection").classList.remove("hidden"); document.getElementById("phoneSection").classList.add("hidden");
const inputs = document.querySelectorAll('.otp-box input');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.inputType !== 'deleteContentBackward' && input.value) {
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value) {
            const prevInput = inputs[index - 1];
            if (prevInput) prevInput.focus();
        }
    });
});

document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10); // Allow only numbers and limit to 10 digits
});

document.getElementById("sendOtp").addEventListener("click", function (e) {
    const phone = document.getElementById("phone").value;
    
});

document.getElementById("sendOtp").addEventListener("click", async function () {
    let phone = document.getElementById("phone").value.trim();
    let button = this;
    let loader = button.querySelector(".loader");
    let spanText = button.querySelector("span");

    if (phone.length !== 10) {
        return showPopupMessage("Please enter a valid 10-digit phone number.");
    }
    const countryCode = document.getElementById("countryCode").value;   
    const pattern = /^(?:[6789]\d{9}|9\d{9}|3\d{9})$/; // Validates for India, Pakistan, Bangladesh, Nepal, etc.
    if (!pattern.test(phone)) return showPopupMessage("Please enter a valid phone number.");

    // Show loader
    loader.classList.remove("hidden");
    spanText.classList.add("hidden");

    try {
        let response = await fetch(`/auth/send-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone }),
        });

        let data = await response.json();
        if (response.ok) {
            showPopupMessage2("📩 OTP Sent!");
            document.getElementById("otpSection").classList.remove("hidden");
        } else {
            alert("❌ " + data.error);
        }
    } catch (error) {
       // showPopupMessage("⚠️ Network error!");
        showPopupMessage2('This is just a demo!', 60*1000, 'red');
        showNotification2("📩 OTP Sent Successfully!",3000,'green'); document.getElementById("otpSection").classList.remove("hidden"); document.getElementById("phoneSection").classList.add("hidden");
        
    }

    // Hide loader
    loader.classList.add("hidden");
    spanText.classList.remove("hidden");
});

document.getElementById("verifyOtp").addEventListener("click", async function () {
    let otpInputs = document.querySelectorAll(".otp-box input");
    let otpCode = Array.from(otpInputs).map(input => input.value).join("");
    let button = this;
    let loader = button.querySelector(".loader");
    let spanText = button.querySelector("span");

    if (otpCode.length !== 6) {
        alert("🔢 Enter a valid 6-digit OTP.");
        return;
    }

    loader.classList.remove("hidden");
    spanText.classList.add("hidden");

    try {
        let response = await fetch(`/auth/verify-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone: document.getElementById("phone").value, otp: otpCode }),
        });

        let data = await response.json();
        if (response.ok) {
            alert("✅ Login Successful!");
        } else {
            alert("❌ " + data.error);
        }
    } catch (error) {
        showPopupMessage("⚠️ Network error!");
    }

    loader.classList.add("hidden");
    spanText.classList.remove("hidden");
});