import {AbstractTerminalCommand} from './AbstractTerminalCommand';
import {Terminal} from '../Components/Terminal';

export class AboutCommand extends AbstractTerminalCommand {
  public name = 'about';
  public description = 'Prints Lucián\'s short overview of his life and work experiences!';
  public constructor(protected terminal: Terminal) {
    super(terminal);
  }
  public execute(): void {
    this.terminal.writeLine('2020 - Engaged');
    this.terminal.writeLine('2020 - Got 2 crazy <a target="_blank" href="http://www.placeholder.com/100x100">dogs</a>!');
    this.terminal.writeLine('2018 - Partydo');
    this.terminal.writeLine('1997 - Born');
  }
}
