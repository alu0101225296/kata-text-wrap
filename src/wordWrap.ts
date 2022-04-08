/**
 * Main Class
 */
export class WordWrap {
  wrap(text: string, columnSize: number): string {
    if (columnSize <= 0) {
      throw new Error('Invalid Column Size');
    }
    if (text.length <= columnSize) {
      return text;
    }
    if (!text.includes(' ')) {
      return (
        text.substring(0, columnSize) +
        '\n' +
        this.wrap(text.substring(columnSize, text.length), columnSize)
      );
    }
    const position = text.indexOf(' ');
    return (
      text.substring(0, position) +
      '\n' +
      this.wrap(text.substring(position + 1, text.length), columnSize)
    );
  }
}
