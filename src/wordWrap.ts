/* eslint-disable prettier/prettier */
import { Char } from './Char';
import { CharChain } from './CharChain';

export class WordWrap {
  wrap(text: CharChain, columnSize: number): CharChain {
    if(columnSize <= 0) {
      throw new Error('Invalid column size. Zero not valid');
    }
    if(text.length() <= columnSize)
      return text;
    
    const spaceIndex = text.slice(0, columnSize).lastIndexOf(new Char(' '));
    if (spaceIndex > 0) {
      text.changeCharacter(spaceIndex, new Char('\n'));
      const previousToEndline = text.slice(0,spaceIndex + 1 );
      return previousToEndline.concat(this.wrap(text.slice(spaceIndex + 1, text.length()), columnSize));
    }


    text.addToChain(columnSize, new Char('\n'));
    const previousToEndline = text.slice(0, columnSize + 1);
    return previousToEndline.concat(this.wrap(text.slice(columnSize + 1, text.length()), columnSize));
  }
}
