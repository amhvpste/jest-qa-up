import {divide, multiply, sum} from './math';

describe('math', () => {
  describe('divide', () => {
    it.each([
      {inputA: 6, inputB: 3, expected: 2},
      {inputA: 12, inputB: 3, expected: 4},
      {inputA: 100, inputB: 10, expected: 10},
      {inputA: 10, inputB: 0, expected: Infinity},
    ])('should $inputA didided to $inputB equals $expected', ({inputA, inputB, expected }) => {
      const result = divide(inputA, inputB)

      expect(result).toBe(expected);
    })
  });

  describe('multiply', () => {
    it('should multiply positive numbers', () => {
      const expectedResult = 6;
  
      const actualResult = multiply(3, 2);
    
      expect(actualResult).toBe(expectedResult);
    });
    
    it('should multiply negative numbers', () => {
      const res = multiply(-3, -2);
    
      expect(res).toBe(6)
    })
  
    it('should multiply negative and positive numbers', () => {
      const res = multiply(3, -2);
    
      expect(res).toBe(-6)
    })
  });

  describe('sum', () => {
    it('should sum 2 digits', () => {
      const expectedResult = 10;

      const result = sum(7, 3);

      expect(result).toBe(expectedResult);
    })
  });
});
