export interface QueueRequirements<T> {
  isEmpty(): boolean;
  enqueue(value: T): number;
  dequeue(): T | undefined;
  peek(): T | undefined;
  length: number;
}

/** Class declaration for constructing a queue data structure. */
export class Queue<T> implements QueueRequirements<T> {
  private _queue: T[] = [];

  /** Returns a boolean value indicating whether the queue has any elements. */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /** Inserts new elements at the start of the queue and returns the queue length. */
  enqueue(value: T): number {
    this._queue.unshift(value);

    return this.length;
  }

  /** Removes the last element from the queue and returns it. */
  dequeue(): T | undefined {
    return this._queue.pop();
  }

  /** Returns an element that will be removed from the queue next. */
  peek(): T | undefined {
    return this._queue[this.length - 1];
  }

  get length(): number {
    return this._queue.length;
  }
}
