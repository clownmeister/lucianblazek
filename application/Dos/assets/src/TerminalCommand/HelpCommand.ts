import {AbstractTerminalCommand, TerminalCommandInterface} from './AbstractTerminalCommand';
import {Terminal} from '../Components/Terminal';

export class HelpCommand extends AbstractTerminalCommand {
  public name = 'help';
  public description = 'Prints available commands.';

  public commands: TerminalCommandInterface[] = [];

  public constructor(protected terminal: Terminal) {
    super(terminal);
  }

  public execute(): void {
    this.terminal.breakLine();
    this.terminal.writeLine('Available commands:');
    this.terminal.breakLine();
    this.printCommandsInfo();
    this.terminal.breakLine();
  }

  private printCommandsInfo(): void {
    for (const command of this.commands) {
      this.terminal.writeLine(command.toString());
    }
  }

  public updateCommandList(commands: TerminalCommandInterface[]): void {
    this.commands = commands;
  }
}
