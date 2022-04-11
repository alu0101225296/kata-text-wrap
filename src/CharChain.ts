/* eslint-disable prettier/prettier */
import { Char } from "./Char";
  

export class CharChain {
  private chars: Char[] = [];

  constructor(stringToParse: string) {
    stringToParse
      .split('')
      .forEach(character => this.chars.push(new Char(character)));
  }

  changeCharacter(position: number, character: Char):void {
    this.chars.splice(position, 1, character);
  }
  
  addToChain(position:number, character:Char):void {
    this.chars.splice(position, 0, character);
  }

  length():number {
    return this.chars.length;
  }

  lastIndexOf(character: Char):number {
    for(let i = this.chars.length - 1; i >= 0; i--) {
      if(this.chars[i].value() === character.value()) {
        return i;
      }
    }
    return -1;
  }
}


