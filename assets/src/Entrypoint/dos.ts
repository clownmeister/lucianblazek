import {Terminal} from "../Components/Terminal";

const terminalSelector = '[data-terminal]';

document.addEventListener('DOMContentLoaded', (): void => {
  const terminalElement = document.querySelector(terminalSelector) as HTMLElement;
  if (terminalElement === null) {
    return;
  }

  const terminal = new Terminal(terminalElement);
  void terminal.init();
});
