/** Sort an array of numbers with quick sort algorithm. */
const quickSort = (array: number[]): number[] => {
  /** Base case */
  if (array.length < 2) return array;

  /** Pick pivot element index from unsorted array. */
  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const leftArray: number[] = [];
  const rightArray: number[] = [];

  /**
   * Compare all array elements with the selected pivot element and arrange them in such a way that
   * elements less than the pivot element are to it's left and greater than pivot is to it's right.
   */
  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i];
    item < pivot ? leftArray.push(item) : rightArray.push(item);
  }

  /**
   * Recursively apply the above steps to the sub-array of elements with smaller values and
   * separately to the sub-array of elements with greater values.
   * Return left array items < pivot < right array items.
   */
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

export default quickSort;
