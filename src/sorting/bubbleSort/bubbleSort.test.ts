import {bubbleSort} from './bubbleSort';

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const unsortedArray = [3, 5, 1, 4, 6, 8, 10, 9, 7, 2];
const unsortedArrayOriginal = Object.freeze([...unsortedArray]);

describe('Bubble sort', () => {
  test('empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test('array with one element', () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  test('odd unsorted array', () => {
    const filterReducer = (n: number) => n < 10;

    expect(bubbleSort(unsortedArray.filter(filterReducer))).toEqual(
      sortedArray.filter(filterReducer)
    );
  });

  test('even unsorted array', () => {
    expect(bubbleSort(unsortedArray)).toEqual(sortedArray);
  });

  test('input array is not mutated', () => {
    bubbleSort(unsortedArray);
    expect(unsortedArray).toEqual(unsortedArrayOriginal);
  });
});
