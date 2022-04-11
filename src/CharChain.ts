/* eslint-disable prettier/prettier */
import { Char } from "./Char";
  

export class CharChain {
  private chars: Char[] = [];

  constructor(stringToParse: string) {
    stringToParse
      .split('')
      .forEach(character => this.chars.push(new Char(character)));
  }

}


