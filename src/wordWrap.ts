/* eslint-disable prettier/prettier */
import { Char } from './Char';
import { CharChain } from './CharChain';

export class WordWrap {
  wrap(text: CharChain, columnSize: number): CharChain {
    if(columnSize <= 0) {
      throw new Error('Invalid column size. Zero not valid');
    }
    if(text.length() < columnSize)
      return text;
  
    const spaceIndex = text.lastIndexOf(new Char(' '));
    if (spaceIndex > 0) {
      text.changeCharacter(spaceIndex, new Char('\n'));
      return text;
    }

    text.addToChain(columnSize, new Char('\n'));
    return text;
  }
  

}
