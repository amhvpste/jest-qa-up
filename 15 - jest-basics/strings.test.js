import {len, toLower, toUpper} from './strings'

describe('strings', () => {
  describe('len', () => {
    it.each([
      {input: 'HELLO', expected: 5},
      {input: 'hi', expected: 2},
      {input: '', expected: 0},
    ])('should return $expected of $input', ({ expected, input }) => {
      const result = len(input);

      expect(result).toBe(expected);
    });
  });

  describe('toLower', () => {
    it.each([
      {input: 'HELLO', expected: 'hello'},
      {input: 'heLlo', expected: 'hello'},
      {input: 'HELlo', expected: 'hello'},
    ])('should return $expected for $input', ({input, expected}) => {
      const result = toLower(input);

      expect(result).toBe(expected);
    })
  })

  describe('toUpper', () => {
    it.each([
      {input: 'hello', expected: 'HELLO'},
      {input: 'HELlo', expected: 'HELLO'},
      {input: 'heLLo', expected: 'HELLO'},
    ])('should return $expected for $input', ({input, expected}) => {
      const result = toUpper(input);

      expect(result).toBe(expected);
    })
  })
})