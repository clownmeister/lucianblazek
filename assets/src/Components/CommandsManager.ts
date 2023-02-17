import {TerminalCommandInterface} from '../TerminalCommand/AbstractTerminalCommand';
import {AboutCommand} from '../TerminalCommand/AboutCommand';
import {Terminal} from './Terminal';
import {HelpCommand} from '../TerminalCommand/HelpCommand';
import {ClearCommand} from '../TerminalCommand/ClearCommand';
import {CvCommand} from '../TerminalCommand/CvCommand';

export class CommandsManager {
  public commands: TerminalCommandInterface[];

  public constructor(private terminal: Terminal) {
    const helpCommand = new HelpCommand(terminal);
    this.commands = [
      helpCommand,
      new AboutCommand(terminal),
      new CvCommand(terminal),
      new ClearCommand(terminal),
    ];

    helpCommand.updateCommandList(this.commands);
    terminal.addEventListener((event) => this.processCommand(event.message));
  }

  private processCommand(input: string): void {
    for (const command of this.commands) {
      if (command.supports(input)) {
        command.execute(input);
        return;
      }
    }
    if (input.trim() !== '') {
      this.terminal.writeLine('Bad command or file name');
    }
  }
}
