document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.querySelector('.nav-menu');
 

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});