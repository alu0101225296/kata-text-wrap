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
    expect(wordWrap.wrap('hola', 7)).toBe('hola');
  });
  
  it('cut word if it is longer than column size', () => {
    expect(wordWrap.wrap('hola', 2)).toBe('ho\nla');
  });
  
  it('accept empty string and dont make any change', () => {
    expect(wordWrap.wrap('', 4)).toBe('');
  });

  it('separate words by spaces if text is longer than column size', () => {
    expect(wordWrap.wrap('hola adios', 7)).toBe('hola\nadios');
  });

  /*
  it('not accept 0 as column size', () => {
    expect(() => {
      wordWrap.wrap('hola', 0);
    }).toThrow(/Invalid/);
  });

  it('not accept negative numbers as column size', () => {
    expect(() => {
      wordWrap.wrap('hola', -1);
    }).toThrow(/Invalid/);
  });

  it('combine space separation and cutting words for splitting lines', () => {
    expect(wordWrap.wrap('sajdf sad sadfsadfsaffsda', 7)).toBe(
      'sajdf\nsad\nsadfsad\nfsaffsd\na',
    );
  }); 
  */
});
