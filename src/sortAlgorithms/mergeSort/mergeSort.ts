/** Merge step function of the merge sort algorithm. */
const merge = <T>(leftArray: T[], rightArray: T[]): T[] => {
  const resultArray: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  /**
   * Compare element in the left at leftIndex and element in the right at rightIndex.
   *  Push the smaller element to mergedArray, then move the correct index cursor
   */
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  /** Return the result array concatenated with the last element in either left or the right  array that skipped due the while loop condition */
  return [
    ...resultArray,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
};

/** Sort an array of numbers with merge sort algorithm. */
const mergeSort = (array: number[]): number[] => {
  /** Base case */
  if (array.length < 2) {
    return array;
  }

  /** Middle index for split step. */
  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

export default mergeSort;
