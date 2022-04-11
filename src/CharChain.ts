/* eslint-disable prettier/prettier */
import { Char } from "./Char";
import { Integer } from "./Integer";
  

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

  changeCharacter(position: Integer, character: Char):void {
    this.chars.splice(position.getValue(), 1, character);
  }
  
  addToChain(position:Integer, character:Char):void {
    this.chars.splice(position.getValue(), 0, character);
  }

  length():Integer {
    return new Integer(this.chars.length);
  }

  slice(start: Integer, end: Integer): CharChain {
    return new CharChain(this.chars.slice(start.getValue(), end.getValue()));
  }

  lastIndexOf(character: Char):Integer {
    for(let i = this.chars.length - 1; i >= 0; i--) {
      if(this.chars[i].value() === character.value()) {
        return new Integer(i);
      }
    }
    return new Integer(-1);
  }

  concat(anotherCharChain: CharChain): CharChain {
    return new CharChain(this.chars.concat(anotherCharChain.chars));
  }
}


