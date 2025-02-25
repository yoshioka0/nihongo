const preloader = document.getElementById("preloader");
  const shape = document.querySelector(".shape");
  const caption = document.getElementById("chat-caption");
  const startTime = performance.now();
  const minDuration = 1500; // Minimum preloader duration (2s)
  const chatMessage = "Nihongo Chats へ ようこそ"; // Nihongo message

  // Display chat message letter by letter
  function animateChat() {
  caption.innerHTML = "";

  chatMessage.split("").forEach((char, i) => {
    let span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // Replace space with non-breaking space
    span.classList.add("letter");
    span.style.animationDelay = `${i * 70}ms`;
    caption.appendChild(span);
  });

  // Delay the dots animation until text is fully written
  let textAnimationTime = chatMessage.length * 100; // Total time for text animation

  setTimeout(() => {
    let dotsContainer = document.createElement("span");
    dotsContainer.classList.add("dots");

    for (let i = 0; i < 3; i++) {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      dot.style.animationDelay = `${i * 200}ms`; // Staggered bounce effect
      dotsContainer.appendChild(dot);
    }

    caption.appendChild(dotsContainer);
  }, textAnimationTime); // Add dots after the text is fully displayed
}

  animateChat(); // Start animation

  window.addEventListener("load", function () {
    const elapsedTime = performance.now() - startTime;
    const remainingTime = minDuration - elapsedTime;

   setTimeout(() => {
  shape.style.animation = "none"; // Stop morphing animation
  shape.style.background = "url('/nihongo/img/icon.png')  no-repeat center"; // Change to your logo
  shape.style.backgroundSize = "contain"; // Ensure logo fits well
  shape.style.borderRadius = "0"; // Optional: Remove rounded corners

      setTimeout(() => {
        preloader.style.transform = "scale(3)"; // Zoom and rotate
        preloader.style.opacity = "0"; // Fade out smoothly
        setTimeout(() => preloader.style.display = "none", 400);
      }, 400);
    }, remainingTime > 0 ? remainingTime : 0);
  });