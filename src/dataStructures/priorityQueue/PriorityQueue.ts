import {Queue} from '../queue/Queue';

export interface PriorityQueueRequirements<T> {
  isEmpty(): boolean;
  enqueue(value: T, isHighPriority: boolean): number;
  dequeue(): T | undefined;
  peek(): T | undefined;
  length: number;
}

/** Class declaration for constructing a priority queue data structure. */
export class PriorityQueue<T> implements PriorityQueueRequirements<T> {
  private _highPriorityQueue: Queue<T> = new Queue();
  private _lowPriorityQueue: Queue<T> = new Queue();

  /** Returns a boolean value indicating whether the priority queue has any elements. */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Inserts new elements at the start of the priority queue based on their priority.
   * Returns priority queue length.
   */
  enqueue(value: T, isHighPriority = false): number {
    const queue = isHighPriority
      ? this._highPriorityQueue
      : this._lowPriorityQueue;

    queue.enqueue(value);

    return this.length;
  }

  /** Removes the last element based on its priority from the priority queue and returns it. */
  dequeue(): T | undefined {
    if (!this._highPriorityQueue.isEmpty())
      return this._highPriorityQueue.dequeue();

    return this._lowPriorityQueue.dequeue();
  }

  /** Returns an element that will be removed from the queue next. */
  peek(): T | undefined {
    if (!this._highPriorityQueue.isEmpty())
      return this._highPriorityQueue.peek();

    return this._lowPriorityQueue.peek();
  }

  get length(): number {
    return this._highPriorityQueue.length + this._lowPriorityQueue.length;
  }
}
