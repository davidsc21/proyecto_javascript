document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('theme-toggle');
  const nav = document.querySelector('nav.menu');
  
  // Verificar si ya estaba activo el modo oscuro
  if (localStorage.getItem('navDarkMode') === 'true') {
    nav.classList.add('dark-nav');
    themeBtn.textContent = '☀️';
  }
  
  // Manejar clic en el botón
  themeBtn.addEventListener('click', function() {
    nav.classList.toggle('dark-nav');
    
    // Cambiar icono y guardar preferencia
    if (nav.classList.contains('dark-nav')) {
      themeBtn.textContent = '☀️';
      localStorage.setItem('navDarkMode', 'true');
    } else {
      themeBtn.textContent = '🌙';
      localStorage.setItem('navDarkMode', 'false');
    }
  });
});