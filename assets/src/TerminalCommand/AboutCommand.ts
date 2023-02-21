import {AbstractTerminalCommand} from './AbstractTerminalCommand';
import {Terminal} from '../Components/Terminal';

export class AboutCommand extends AbstractTerminalCommand {
  public name = 'about';
  public description = 'Prints Lucián\'s short overview of his life and work experiences!';
  public constructor(protected terminal: Terminal) {
    super(terminal);
  }
  public execute(): void {
    this.terminal.writeLine('2023 - <a target="_blank" href="https://globalgamejam.org/users/lushn">GGJ 2023</a>');
    this.terminal.writeLine('2022 - Got a <a target="_blank" href="/upload/cat.jpg">cat</a>!');
    this.terminal.writeLine('2020 - Contracted by FTMO to this day');
    this.terminal.writeLine('2020 - Married');
    this.terminal.writeLine('2020 - Mediafactory a.s. (vodafone, o2)');
    this.terminal.writeLine('2020 - Covid happened, no more Korea ;(');
    this.terminal.writeLine('2020 - Living in S. Korea working remote for Realpad');
    this.terminal.writeLine('2020 - <a target="_blank" href="https://globalgamejam.org/users/lushn">GGJ 2020</a>');
    this.terminal.writeLine('2019 - Contractor for 1. Web IT');
    this.terminal.writeLine('2019 - First <a target="_blank" href="https://globalgamejam.org/users/lushn">GlobalGameJam</a> (Develop game under 48h)');
    this.terminal.writeLine('2018 - <a target="_blank" href="https://www.timemakerint.com/">Timemaker</a>');
    this.terminal.writeLine('2017 - <a target="_blank" href="https://www.partydo.cz/">Partydo</a>');
    this.terminal.writeLine('2016 - Got 2 crazy <a target="_blank" href="/upload/dogs.jpg">dogs</a>!');
    this.terminal.writeLine('2016 - Working as on-site technic');
    this.terminal.writeLine('1997 - Born');
    this.terminal.breakLine();
    this.terminal.writeLine('Type "cv" for more hr friendly version :)');
  }
}
