# Insertion Sort

**Insertion sort** is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration,
insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it.
At each array-position, it checks the value there against the largest value in the sorted list (which happens to be
next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next.

If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.

## Visualization

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## Complexity

- Worst-case performance:       О(n2) comparisons and swaps
- Best-case performance:        O(n) comparisons, O(1) swaps
- Average performance:          O(n2) comparisons and swaps
- Worst-case space complexity:  О(n) total, O(1) auxiliary

## References

[Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
