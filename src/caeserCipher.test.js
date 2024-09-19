import caesarCipher from "./caeserCipher";

test('"aaabbbccc" becomes "bbbcccddd"', () => {
    expect(caesarCipher('aaabbbccc', 1)).toBe('bbbcccddd');
  });
  
  test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
    expect(caesarCipher('aAabBbzZz', 1)).toBe('bBbcCcaAa');
  });
  
  test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
    expect(caesarCipher('a1ab#bc c', 1)).toBe('b1bc#cd d');
  });

  test('"abc, def" becomes "fgh, ijk"', () => {
    expect(caesarCipher('abc, def', 5)).toBe('fgh, ijk');
  });
  
  test('1 becomes "not a string"', () => {
    expect(caesarCipher(1, 1)).toBe('not a string');
  });