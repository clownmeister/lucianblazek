import {formatDate, formatTime, getDayName, sleep} from './Utils';
import {Caret} from './Caret';

export class Terminal {
  private static inputLimit = 64;
  private static userInputPrefix = 'A>';
  private readonly caret: Caret;
  private input: HTMLInputElement | null = null;

  public constructor(
    private parentElement: HTMLElement,
    private debug: boolean = true
  ) {
    this.caret = new Caret(this.parentElement);
  }

  public async init(): Promise<void> {
    document.body.addEventListener('click', () => {
      this.input?.focus();
      this.updateCaret();
    });

    await this.printBootSequence();
  }

  private async printBootSequence(): Promise<void> {
    await this.writeLineDelayed('IMB 5150 BIOS. 57006671. Modified by LB 2023.', 500);
    await this.writeLineDelayed('Checking RAM', 3000);
    await this.writeLineDelayed('Reset Disk', 2000);
    await this.writeLineDelayed('Reading Sector 1', 500);
    await this.writeLineDelayed('Booting', 1000);
    await this.writeLineDelayed(`Current date is ${getDayName(new Date())} ${formatDate(new Date())}`, 1500);
    await this.writeLineDelayed(`Current time is ${formatTime(new Date())}`, 100);
    this.breakLine();
    this.breakLine();
    await this.writeLineDelayed('The LB\'s Personal Computer DOS', 200);
    await this.writeLineDelayed('Version 2.10 (C)Copyright Lucián Blažek 2023', 100);
    this.breakLine();
    await this.writeLineDelayed('You can start by typing "help"', 100);
    this.breakLine();
    this.waitForUserInput();
  }

  public breakLine(lines = 1): void {
    for (let i = 0; i < lines; i++) {
      this.parentElement.appendChild(document.createElement('br'));
    }
  }

  public writeLine(input: string): void {
    this.parentElement.appendChild(Terminal.createLine(input));
  }

  public async writeLineDelayed(input: string, delay: number): Promise<void> {
    if (!this.debug) {
      await sleep(delay);
    }
    this.parentElement.appendChild(Terminal.createLine(input));
  }

  public waitForUserInput(): void {
    const line = Terminal.createLine(Terminal.userInputPrefix);
    const input = Terminal.createInput();
    line.appendChild(input);
    this.parentElement.appendChild(line);

    this.input = input as HTMLInputElement;
    this.input.addEventListener('input', () => this.updateCaret());
    this.input.addEventListener('keydown', () => {
      void sleep(10).then(()=>{
        this.updateCaret();
      });
    });
    this.input.focus();
    this.updateCaret();
  }

  private updateCaret(): void {
    this.caret.setActive(this.input !== null);
    if (this.input !== null) {
      this.caret.updatePosition(this.input);
    }
  }

  static createInput(): HTMLElement {
    const element = document.createElement('input');
    element.setAttribute('type', 'text');
    element.setAttribute('maxlength', Terminal.inputLimit.toString());

    return element;
  }

  static createLine(input: string): HTMLElement {
    const element = document.createElement('p');
    const text = document.createTextNode(input);
    element.appendChild(text);

    return element;
  }
}
