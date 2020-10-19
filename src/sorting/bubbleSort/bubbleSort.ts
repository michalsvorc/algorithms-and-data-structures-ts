/** Sort an array of numbers with bubble sort algorithm. */
function bubbleSort(originalArray: number[]): number[] {
  const array = [...originalArray];
  /**
   * Keep track of "swapped" variable through array iterations.
   * If it remains false during the algorithm pass, array is sorted and we can return it. */
  let swapped;

  do {
    /** Set "swapped" variable to false on start of algorithm pass. */
    swapped = false;
    /**
     * Iterate over all elements in array.
     * Start at index 1 as the first element has nothing to compare to.
     */
    for (let i = 1; i < array.length; i++) {
      /** Compare current item to previous item and swapped if necessary. */
      if (array[i] < array[i - 1]) {
        /** Swap the elements with destructuring assignment. */
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        /** Set "swapped" variable to true to indicate we need another algorithm pass. */
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

export default bubbleSort;
