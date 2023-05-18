import {AbstractTerminalCommand} from './AbstractTerminalCommand';
import {Terminal} from '../Components/Terminal';

export class ClearCommand extends AbstractTerminalCommand {
  public name = 'cls';
  public description = 'Clears the screen.';
  public constructor(protected terminal: Terminal) {
    super(terminal);
  }
  public execute(): void {
    this.terminal.clear();
  }
}
