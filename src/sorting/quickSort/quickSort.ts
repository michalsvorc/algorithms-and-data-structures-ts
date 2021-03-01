/** Sort an array of numbers with quicksort algorithm. */
export const quickSort = (array: number[]): number[] => {
  /** Base case */
  if (array.length < 2) return array;

  /** Pick pivot element index from the unsorted array. */
  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];

  /** Create left and right arrays. */
  const leftArray: number[] = [];
  const rightArray: number[] = [];

  /**
   * Compare all elements with the selected pivot and arrange them in such a way
   * that:
   * elements less than pivot are to the left of the pivot
   * elements greater than pivot are to the right of the pivot
   */
  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i];
    item < pivot ? leftArray.push(item) : rightArray.push(item);
  }

  /**
   * Call the quickSort function recursively on the left and right arrays.
   */
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};
