import {formatDate, formatTime, getDayName, sleep} from './Utils';
import {Caret} from './Caret';

export class Terminal {
  private static inputLimit = 64;
  private readonly caret: Caret;

  public constructor(
    private parentElement: HTMLElement,
    private debug: boolean = true
  ) {
    this.caret = new Caret(this.parentElement);
  }

  public async init(): Promise<void> {
    document.body.addEventListener('click', () => {
      Terminal.setFocusInput();
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
    this.parentElement.appendChild(Terminal.createInputLine());
    Terminal.setFocusInput();
    this.updateCaret();
  }

  private updateCaret(active = true): void {
    this.caret.setActive(active);
    if (!active) {
      return;
    }

    const elements = document.getElementsByTagName('input');
    if (elements.length === 0) {
      return;
    }
    this.caret.updatePosition(elements[0]);
  }

  private static setFocusInput(): void {
    const elements = document.getElementsByTagName('input');
    if (elements.length === 0) {
      return;
    }
    elements[0].focus();
  }

  static createInputLine(): HTMLElement {
    const line = Terminal.createLine('A>');
    const element = document.createElement('input');
    element.setAttribute('type', 'text');
    element.setAttribute('maxlength', Terminal.inputLimit.toString());
    line.appendChild(element);

    return line;
  }

  static createLine(input: string): HTMLElement {
    const element = document.createElement('p');
    const text = document.createTextNode(input);
    element.appendChild(text);

    return element;
  }
}
