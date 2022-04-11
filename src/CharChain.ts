/* eslint-disable prettier/prettier */
import { Char } from "./Char";
  

export class CharChain {
  private chars: Char[] = [];

  constructor(stringToParse: string | Char[] ) {
    if(typeof(stringToParse) === "string") {
      stringToParse
        .split('')
        .forEach(character => this.chars.push(new Char(character)));
        return;
    }
    this.chars = stringToParse;
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

  slice(start: number, end: number): CharChain {
    return new CharChain(this.chars.slice(start, end));
  }

  lastIndexOf(character: Char):number {
    for(let i = this.chars.length - 1; i >= 0; i--) {
      if(this.chars[i].value() === character.value()) {
        return i;
      }
    }
    return -1;
  }

  concat(anotherCharChain: CharChain): CharChain {
    return new CharChain(this.chars.concat(anotherCharChain.chars));
  }
}


