const toggleDarkModeBtn = document.querySelector('#dark-mode-icon');

toggleDarkModeBtn.addEventListener('click', () => {
  if (!document.documentElement.hasAttribute('data-theme', 'dark')) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  console.log('clicked')
});