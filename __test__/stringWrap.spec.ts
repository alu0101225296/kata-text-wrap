/* eslint-disable prettier/prettier */
import { CharChain } from '../src/CharChain';
import { Integer } from '../src/Integer';
import { WordWrap } from '../src/wordWrap';

/**
 * wrap("hola", 7) => "hola"
 * wrap("hola", 2) => "ho\nla"
 * wrap("", 5) => ""
 * wrap(null, 3) => ""
 * wrap("hola adios", 7) => "hola\nadios"
 * wrap("hola", 0) => throw Error
 * wrap("hola", -1) => throw Error
 * wrap("sajdf sad sadfsadfsaffsda", 7) => "sajdf\nsad\nsadfsad\nfsaffsd\na"
 */

describe('WordWrap should', () => {
  let wordWrap: WordWrap;

  beforeEach(() => {
    wordWrap = new WordWrap();
  });

  it('accept word if length is less than column size', () => {
    expect(wordWrap.wrap(new CharChain('hola'), new Integer(7))).toStrictEqual(new CharChain('hola'));
  });

  it('cut word if it is longer than column size', () => {
    expect(wordWrap.wrap(new CharChain('hola'), new Integer(2))).toStrictEqual(new CharChain('ho\nla'));
  });

  it('accept empty string and dont make any change', () => {
    expect(wordWrap.wrap(new CharChain(''), new Integer(4))).toStrictEqual(new CharChain(''));
  });

  it('separate words by spaces if text is longer than column size', () => {
    expect(wordWrap.wrap(new CharChain('hola adios'), new Integer(7))).toStrictEqual(new CharChain('hola\nadios'));
  });

  it('not accept 0 or negative numbers as column size', () => {
    expect(() => {
      wordWrap.wrap(new CharChain('hola'), new Integer(0));
    }).toThrow(/Invalid/);
    expect(() => {
      wordWrap.wrap(new CharChain('hola'), new Integer(-1));
    }).toThrow(/Invalid/);
  });

  it('combine space separation and cutting words for splitting lines', () => {
    expect(wordWrap.wrap(new CharChain('sajdf sad sadfsadfsaffsda'), new Integer(7))).toStrictEqual(
      new CharChain('sajdf\nsad\nsadfsad\nfsaffsd\na'));
  });
});
