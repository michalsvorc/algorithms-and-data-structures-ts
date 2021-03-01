/** Sort an array of numbers with merge sort algorithm. */
export const mergeSort = (array: number[]): number[] => {
  /** Base case */
  if (array.length < 2) return array;

  /** Middle index for split step. */
  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

/** Merge step function of the merge sort algorithm. */
const merge = <T>(leftArray: T[], rightArray: T[]): T[] => {
  const mergedArray: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  /**
   * Compare element on the left (leftIndex) with an element on the right (rightIndex).
   * Push the smaller element to the mergedArray, then increment the correct index cursor.
   */
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  /**
   * Return merged array, concatenated with left/right array.
   * Left/right array might contain remaining elements skipped from mergedArray.push()
   * due to the inequality of their array length.
   */
  return [
    ...mergedArray,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
};
