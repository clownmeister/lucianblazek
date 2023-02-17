import {Terminal} from '../Components/Terminal';

export interface TerminalCommandInterface {
  supports(input: string): boolean;
  execute(input: string): void;
  toString(): string;
}

export abstract class AbstractTerminalCommand implements TerminalCommandInterface {
  abstract name:string;
  abstract description:string;
  protected constructor(protected terminal: Terminal) {
  }
  abstract execute(input: string): void;

  public supports(input: string): boolean {
    return this.name === input.toLowerCase().trim();
  }

  public toString(): string {
    return `${this.name} - ${this.description}`;
  }
}
