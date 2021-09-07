let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.toggle');

/*
1. Check if dark mode is enabled
2. If enabled turn off
3. If disabled turn on
*/
const enableDarkMode =() => {
// add darkMode class to body
document.body.classList.add('darkMode');
// update darkMode in local storage
localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode =() => {
  // remove darkMode class from body
  document.body.classList.remove('darkMode');
  // update darkMode in local storage
  localStorage.setItem('darkMode', null);
  }

if(darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});