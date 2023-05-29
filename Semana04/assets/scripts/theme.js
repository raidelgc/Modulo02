function toggleTheme() {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
  
    if (body.classList.contains('theme-light')) {
      body.classList.remove('theme-light');
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
      body.classList.add('theme-light');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
  }
  