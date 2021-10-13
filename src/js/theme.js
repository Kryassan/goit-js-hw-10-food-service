const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const themeSwitcherEl = document.querySelector('#theme-switch-toggle');

bodyEl.classList.add(theme.LIGHT);

themeSwitcherEl.addEventListener('click', e => {
  bodyEl.classList.toggle(theme.LIGHT);
  bodyEl.classList.toggle(theme.DARK);
  localStorage.setItem('currentTheme', bodyEl.className);
});

bodyEl.className = localStorage.getItem('currentTheme');

if (bodyEl.className === theme.DARK) {
  themeSwitcherEl.checked = true;
}