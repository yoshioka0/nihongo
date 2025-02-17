//constants in config.js


// Smooth scrolling for internal anchor links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Check if the link is an internal anchor (starts with #)
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }
    // If it's a link to another page, don't prevent default
  });
});

// Smooth scroll buttons
document.getElementById('scroll-up')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('scroll-down')?.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

// Dialog handling
document.querySelectorAll('.open-dialog').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById(this.getAttribute('data-dialog')).style.display = 'block';
    });
});
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.dialog').style.display = 'none';
    });
});
window.addEventListener('click', event => {
    if (event.target.classList.contains('dialog')) {
        event.target.style.display = 'none';
    }
});






