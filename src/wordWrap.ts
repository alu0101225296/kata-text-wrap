/**
 * Main Class
 */
export class WordWrap {
  wrap(text: string, columnSize: number): string {
    if (columnSize <= 0) {
      throw new Error('Invalid Column Size');
    }

    for (let limit = columnSize; limit < text.length; limit += columnSize) {
      let slice = text.slice(limit - columnSize, limit);
      let spaceIndex = slice.lastIndexOf(' ');
      if (spaceIndex > 0) {
        spaceIndex = limit - columnSize + spaceIndex;
        text =
          text.slice(0, spaceIndex) +
          '\n' +
          text.slice(spaceIndex + 1);
        limit = spaceIndex + 1;
      } else {
        text = text.slice(0, limit) + '\n' + text.slice(limit);
        limit++;
      }
    }
    return text;
  }
}
