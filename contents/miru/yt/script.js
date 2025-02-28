document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const videoThumbnails = document.querySelectorAll(".video-thumbnail");
    const videoModal = document.getElementById("video-modal");
    const videoFrame = document.getElementById("video-frame");
    const closeModal = document.querySelector(".close");

    // Lazy Load Thumbnails
    const lazyLoadImages = document.querySelectorAll(".lazy-load img");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    lazyLoadImages.forEach(img => observer.observe(img));

    // Load Theme Preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    // Toggle Dark Mode
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // Open Video Modal
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            const videoUrl = thumbnail.getAttribute("data-video");
            videoFrame.src = videoUrl + "?autoplay=1";
            videoModal.classList.add("active");
        });
    });

    // Close Video Modal
    closeModal.addEventListener("click", () => {
        videoModal.classList.remove("active");
        videoFrame.src = "";
    });

    // Auto-Close on Scroll
    window.addEventListener("scroll", () => {
        if (videoModal.classList.contains("active")) {
            videoModal.classList.remove("active");
            videoFrame.src = "";
        }
    });

    // Close Modal on Click Outside
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove("active");
            videoFrame.src = "";
        }
    });
});