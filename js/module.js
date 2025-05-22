document.querySelectorAll('.module').forEach(module => {
    module.addEventListener('click', () => {
      module.classList.toggle('active');
      const icon = module.querySelector('.toggle-icon');
      icon.textContent = module.classList.contains('active') ? '-' : '+';
    });
  });