import {AbstractTerminalCommand} from './AbstractTerminalCommand';
import {Terminal} from '../Components/Terminal';

export class CvCommand extends AbstractTerminalCommand {
  public name = 'cv';
  public description = 'Download Lucián\'s CV.';
  public constructor(protected terminal: Terminal) {
    super(terminal);
  }
  public execute(): void {
    this.terminal.breakLine();
    this.terminal.writeLine("Download should begin shortly. If not download it <a href='/upload/cv.pdf' download='lucian_blazek_cv' data-cv-download>here</a>.");
    this.terminal.breakLine();

    const cvLinks = [...document.querySelectorAll('[data-cv-download]')] as HTMLElement[];
    if (cvLinks.length === 0) {
      return;
    }

    cvLinks[0].click();
  }
}
