import { getLength } from '../getLength';

describe('getLength', () => {
  it('should return 0 for an empty array', () => {
    const res = getLength([]);

    expect(res).toBe(0);
  });

  it('should return 3 for an array with 3 elements', () => {
    const res = getLength([1, 2, 3]);

    expect(res).toBe(3);
  });

  it('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });
});
