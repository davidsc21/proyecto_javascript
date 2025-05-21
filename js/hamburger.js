document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navActions = document.querySelector('.nav-actions');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});