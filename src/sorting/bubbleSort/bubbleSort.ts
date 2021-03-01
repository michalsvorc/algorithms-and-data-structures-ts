/** Sort an array of numbers with bubble sort algorithm. */
export const bubbleSort = (inputArray: number[]): number[] => {
  const array = [...inputArray];

  /**
   * Keep track of the "swapped" variable through array iterations.
   * If the variable remains false during algorithm passes, the array is sorted and we can return it. */
  let swapped;

  do {
    swapped = false;
    /**
     * Iterate over all elements in the array.
     * Start at index 1, since the index 0 has no previous elements to compare.
     */
    for (let i = 1; i < array.length; i++) {
      /** Compare current element to the previous one and swap them if necessary. */
      if (array[i] < array[i - 1]) {
        /** Swap the elements with destructuring assignment. */
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        /** Set "swapped" variable to true, indicating need for another algorithm pass. */
        swapped = true;
      }
    }
  } while (swapped);

  return array;
};
