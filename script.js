// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-mode');
};

// Accordion Functionality
const accordions = document.querySelectorAll('.accordion h2');
accordions.forEach(header => {
  header.addEventListener('click', () => {
    const panel = header.nextElementSibling;
    panel.classList.toggle('active');
  });
});
