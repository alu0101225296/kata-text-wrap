export class Char {
  private readonly char: string;

  constructor(char: string) {
    if (char.length !== 1) {
      throw TypeError('Type error. Input not parsable to type Char');
    }
    this.char = char;
  }

  value(): string {
    return this.char;
  }
}
