export class Terminal {
  public constructor(
    private parentElement: HTMLElement
  ) {}

  public init() {
    this.writeLine("IBM Personal Computer DOS Version 3.30")
  }

  public writeLine(input: string) {
    this.parentElement.appendChild(this.createLine(input))
  }

  private createLine(input: string): HTMLElement {
    const element = document.createElement('p')
    const text = document.createTextNode(input);
    element.appendChild(text);

    return element
  }

}
