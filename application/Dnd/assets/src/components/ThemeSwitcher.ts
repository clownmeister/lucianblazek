import {Themes} from '../enums/Themes';

const ThemeSwitcher: () => { init: () => void } = () => {
  const selector = '[data-target="theme-switcher"]';
  const themeAttribute = 'data-bs-theme';
  const init: () => void = () => {
    const switchers = document.querySelectorAll(selector);
    for (const switcher of switchers) {
      switcher.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute(themeAttribute);
        if (activeTheme === Themes.Dark) {
          document.documentElement.setAttribute(themeAttribute, Themes.Light);
        } else {
          document.documentElement.setAttribute(themeAttribute, Themes.Dark);
        }
      });
    }
  };

  return {init: init};
};

export default ThemeSwitcher();
