export const maxSymbolLimit = (text: string) =>
  text && text.length > 30 ? text.slice(0, 50) + '...' : text;
