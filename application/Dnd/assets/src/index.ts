import '@popperjs/core';

// Style
import './../style/index.scss';
import * as bootstrap from 'bootstrap';
import ThemeSwitcher from './components/ThemeSwitcher';


document.addEventListener('DOMContentLoaded', (): void => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  ThemeSwitcher.init();
});
