document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  let currentTheme = 'style1.css'; //  default Theme
  const themeStyles = {
      'style1': 'style1.css',
      'style2': 'style2.css',
      'style3': 'style3.css'
  };

  themeToggle.addEventListener('click', function() {
      // Change theme
      switchTheme();
  });

  function switchTheme() {
      // next theme
      if (currentTheme === 'style1') {
          currentTheme = 'style2';
      } else if (currentTheme === 'style2') {
          currentTheme = 'style3';
      } else {
          currentTheme = 'style1';
      }

      // Change CSS
      loadThemeStyles(currentTheme);
  }

  function loadThemeStyles(theme) {
      const styleLink = document.getElementById('theme-style');
      styleLink.href = themeStyles[theme];
  }
});




