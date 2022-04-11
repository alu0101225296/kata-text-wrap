/* eslint-disable prettier/prettier */
import { Char } from './Char';
import { CharChain } from './CharChain';

export class WordWrap {
  wrap(text: CharChain, columnSize: number): CharChain {
    if(text.length() < columnSize)
      return text;
  
    text.addToChain(columnSize, new Char('\n'));
    return text;
  }
}
