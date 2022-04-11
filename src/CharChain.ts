/* eslint-disable prettier/prettier */
import { Char } from "./Char";
  

export class CharChain {
  private chars: Char[] = [];

  constructor(stringToParse: string) {
    stringToParse
      .split('')
      .forEach(character => this.chars.push(new Char(character)));
  }

  addToChain(position:number, char:Char):void {
    this.chars.splice(position, 0, char);
  }

  length():number {
    return this.chars.length;
  }

}


