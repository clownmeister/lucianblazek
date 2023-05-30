import '@popperjs/core';

// Style
import './../style/index.scss';


document.addEventListener('DOMContentLoaded', (): void => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => Tooltip(tooltipTriggerEl))
});
