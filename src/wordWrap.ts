/* eslint-disable prettier/prettier */
import { Char } from './Char';
import { CharChain } from './CharChain';
import { Integer } from './Integer';

export class WordWrap {
  wrap(text: CharChain, columnSize: Integer): CharChain {
    if (columnSize.isLessOrEqualThan(new Integer(0))) {
      throw new Error('Invalid column size. Zero not valid');
    }
    if (columnSize.isGreaterOrEqualThan(text.length()))
      return text;
    
    const spaceIndex = text.slice(new Integer(0), columnSize).lastIndexOf(new Char(' '));
    if (spaceIndex.isGreaterThan(new Integer(0))) {
      text.changeCharacter(spaceIndex, new Char('\n'));
      const previousToEndline = text.slice(new Integer(0),spaceIndex.add(new Integer(1)));
      return previousToEndline.concat(this.wrap(text.slice(spaceIndex.add(new Integer(1)), text.length()), columnSize));
    }

    text.addToChain(columnSize, new Char('\n'));
    const previousToEndline = text.slice(new Integer(0), columnSize.add(new Integer(1)));
    return previousToEndline.concat(this.wrap(text.slice(columnSize.add(new Integer(1)), text.length()), columnSize));
  }
}
