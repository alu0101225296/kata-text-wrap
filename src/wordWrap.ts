/**
 * Main Class
 */
export class WordWrap {
  wrap(text: string, columnSize: number): string {
    //let addNewLineRegex : RegExp = new RegExp(`.{${columnSize}}`, 'g');
    //text = text.replace(addNewLineRegex, '$0\n');

    for(let limit = columnSize; limit < text.length; limit += columnSize + 1) {
      text = text.slice(0, limit) + '\n' + text.slice(limit);
    }
    return text;
  }
}
