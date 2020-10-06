/** Sort an array of numbers with insertion sort algorithm. */
const insertionSort = (originalArray: number[]): number[] => {
  const array = [...originalArray];

  /**
   * Iterate over all elements in array.
   * Start at index 1 as the first element has nothing to compare.
   */
  for (let i = 1; i < array.length; i++) {
    let currentIndex = i;

    /**
     * Iterate array backwards, starting at currentIndex.
     * Test if previous elements and greater then the one at currentIndex.
     * If true, swap that elements, otherwise leave it in place.
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

      /** Shift current index left. */
      currentIndex--;
    }
  }

  return array;
};

export default insertionSort;
