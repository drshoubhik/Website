// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-mode');
};

// Accordion Animation
const headers = document.querySelectorAll('.accordion h2');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const panel = header.nextElementSibling;
    panel.classList.toggle('active');

    // Smooth scroll into view after expanding
    setTimeout(() => {
      if (panel.classList.contains('active')) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  });
});
