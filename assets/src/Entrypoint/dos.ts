import {Terminal} from "../Components/Terminal";

const terminalSelector = '[data-terminal]';

document.addEventListener('DOMContentLoaded', () => {
  const terminalElement = document.querySelector(terminalSelector) as HTMLElement;
  if (terminalElement === null) {
    return;
  }

  new Terminal(terminalElement);
});
