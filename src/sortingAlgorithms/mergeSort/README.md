# Merge sort

In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

Conceptually, a merge sort works as follows:
- Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
- Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

## Complexity

- Worst-case performance: O(n log n)
- Best-case performance: O(n log n) typical, O(n) natural variant
- Average performance: O(n log n)
- Worst-case space complexity: О(n) total with O(n) auxiliary, O(1) auxiliary with linked lists

## Diagram

![Merge sort algorithm](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/798px-Merge_sort_algorithm_diagram.svg.png)

## References

[Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)