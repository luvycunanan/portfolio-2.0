const toggleDarkMode = document.querySelector('#light-mode');

toggleDarkMode.addEventListener('click', () => {
  if (document.getElementById('light-mode')) {
    toggleDarkMode.id = 'dark-mode';
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (document.getElementById('dark-mode')) {
    toggleDarkMode.id = 'light-mode';
    document.documentElement.setAttribute('data-theme', 'light');
    // location.reload();
  }

  console.log('clicked')
});