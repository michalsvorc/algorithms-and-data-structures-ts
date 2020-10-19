import sortingAlgorithm from './insertionSort';

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const unsortedArray = [3, 5, 1, 4, 6, 8, 10, 9, 7, 2];
const unsortedArrayOriginal = Object.freeze([...unsortedArray]);

describe('Insertion sort', () => {
  test('empty array', () => {
    expect(sortingAlgorithm([])).toEqual([]);
  });

  test('array with one element', () => {
    expect(sortingAlgorithm([1])).toEqual([1]);
  });

  test('odd unsorted array', () => {
    const filterReducer = (n) => n < 10;

    expect(sortingAlgorithm(unsortedArray.filter(filterReducer))).toEqual(
      sortedArray.filter(filterReducer)
    );
  });

  test('even unsorted array', () => {
    expect(sortingAlgorithm(unsortedArray)).toEqual(sortedArray);
  });

  test('input array is not mutated', () => {
    sortingAlgorithm(unsortedArray);
    expect(unsortedArray).toEqual(unsortedArrayOriginal);
  });
});
