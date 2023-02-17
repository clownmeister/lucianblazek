import {TerminalCommandInterface} from '../TerminalCommand/AbstractTerminalCommand';
import {HelloWorldCommand} from '../TerminalCommand/HelloWorldCommand';
import {Terminal} from './Terminal';
import {HelpCommand} from '../TerminalCommand/HelpCommand';

export class CommandsManager {
  public commands: TerminalCommandInterface[];

  public constructor(private terminal: Terminal) {
    const helpCommand = new HelpCommand(terminal);
    this.commands = [
      helpCommand,
      new HelloWorldCommand(terminal)
    ];

    helpCommand.updateCommandList(this.commands);
    terminal.addEventListener((event) => this.processCommand(event.message));
  }

  private processCommand(input: string): void {
    for (const command of this.commands) {
      if (command.supports(input)) {
        command.execute(input);
      }
    }
  }
}
