import {Terminal} from '../Components/Terminal';
import {CommandsManager} from '../Components/CommandsManager';

const terminalSelector = '[data-terminal]';

document.addEventListener('DOMContentLoaded', (): void => {
  const terminalElement = document.querySelector(terminalSelector) as HTMLElement;
  if (terminalElement === null) {
    return;
  }

  const terminal = new Terminal(terminalElement);
  new CommandsManager(terminal);
  void terminal.init();
});
