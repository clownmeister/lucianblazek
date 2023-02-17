import {AbstractTerminalCommand} from './AbstractTerminalCommand';
import {Terminal} from '../Components/Terminal';

export class HelloWorldCommand extends AbstractTerminalCommand {
  public name = 'hello';
  public description = 'Prints \"hello-world\"!';
  public constructor(protected terminal: Terminal) {
    super(terminal);
  }
  public execute(): void {
    this.terminal.writeLine('Hello world!');
  }
}
