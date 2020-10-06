import mergeSort from './mergeSort';

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shuffledArray = [3, 5, 1, 4, 6, 8, 10, 9, 7, 2];

describe('Merge sort', () => {
  test('empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('array with one element', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test('odd unsorted array', () => {
    const filterReducer = (n) => n < 10;
    expect(mergeSort(shuffledArray.filter(filterReducer))).toEqual(
      sortedArray.filter(filterReducer)
    );
  });

  test('even unsorted array', () => {
    expect(mergeSort(shuffledArray)).toEqual(sortedArray);
  });
});
