import {AbstractTerminalCommand} from './AbstractTerminalCommand';
import {Terminal} from '../Components/Terminal';

export class CvCommand extends AbstractTerminalCommand {
  public name = 'cv';
  public description = 'Download Lucián\'s CV.';
  public constructor(protected terminal: Terminal) {
    super(terminal);
  }
  public execute(): void {
    this.terminal.breakLine()
    this.terminal.writeLine("Download should begin shortly.")
    this.terminal.breakLine()
  }
}
