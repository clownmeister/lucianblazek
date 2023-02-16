export class Caret {
  private static caretClass = 'dos__caret';
  private static caretActiveClass = 'active';
  private static caretAttribute = 'data-caret';
  private static caretSelector = `[${Caret.caretAttribute}]`;
  private readonly caretElement: HTMLElement;
  public constructor(
    private terminal: HTMLElement,
    private isActive = false
  ) {
    this.caretElement = Caret.createElement();
    this.terminal.appendChild(this.caretElement);
  }

  private static createElement(): HTMLElement {
    const element = document.createElement('div');
    element.classList.add(Caret.caretClass);
    element.setAttribute(Caret.caretAttribute, '');

    return element;
  }

  public updatePosition(input: HTMLInputElement): void {
    this.caretElement.style.left = input.selectionStart?.toString() ?? '0';
    this.caretElement.style.top = input.getBoundingClientRect().top.toString();
  }

  public setActive(active = true): void {
    this.isActive = active;
    this.caretElement.classList.toggle(Caret.caretActiveClass, active);
  }
}
