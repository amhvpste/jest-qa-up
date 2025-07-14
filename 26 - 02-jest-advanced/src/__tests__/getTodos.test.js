import axios from 'axios';

import { getTodos } from '../getTodos';

// let axiosSpy;
const axiosSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, 'error');

describe('getTodos', () => {
  // beforeEach(() => {
  //   axiosSpy = jest.spyOn(axios, 'get');
  // });

  afterEach(() => {
    jest.clearAllMocks();
    // jest.restoreAllMocks();
  });

  it('should return an empty array in case of error and print error to console', async () => {
    const errMessage = 'Network error';

    // axiosSpy.mockImplementationOnce(() => Promise.reject(errMessage));
    axiosSpy.mockRejectedValueOnce(errMessage);

    const result = await getTodos();

    expect(errorSpy).toHaveBeenCalledWith(errMessage);
    expect(result).toEqual([]);
  });

  it('should return 200 todos using axios.get', async () => {
    const result = await getTodos();

    expect(axiosSpy).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos'
    );
    expect(result).toHaveLength(200);
  });
});
