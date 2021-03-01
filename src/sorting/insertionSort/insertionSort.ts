/** Sort an array of numbers with insertion sort algorithm. */
export const insertionSort = (inputArray: number[]): number[] => {
  const array = [...inputArray];

  /**
   * Iterate over all elements in the array.
   * Start at index 1, since the index 0 has no previous elements to compare.
   */
  for (let i = 1; i < array.length; i++) {
    let currentIndex = i;

    /**
     * Iterate array backwards, starting at currentIndex.
     * Test if previous elements are greater then the one at currentIndex.
     * If true, swap that elements, otherwise leave them in place.
     */
    while (
      array[currentIndex - 1] !== undefined &&
      array[currentIndex] < array[currentIndex - 1]
    ) {
      /** Swap the elements with destructuring assignment. */
      [array[currentIndex - 1], array[currentIndex]] = [
        array[currentIndex],
        array[currentIndex - 1],
      ];

      /** Shift current index to the left. */
      currentIndex--;
    }
  }

  return array;
};
