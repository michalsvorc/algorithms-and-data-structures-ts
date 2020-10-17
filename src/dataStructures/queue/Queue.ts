export interface IQueue<T> {
  isEmpty(): boolean;
  enqueue(value: T): number;
  dequeue(): T | undefined;
  peek(): T | undefined;
  length: number;
}

/** Class declaration for constructing a queue data structure. */
class Queue<T> implements IQueue<T> {
  #queue: T[] = [];

  /** Returns a boolean value indicating whether the queue has any elements. */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /** Inserts new elements at the start of the queue and returns the queue length. */
  enqueue(value: T): number {
    this.#queue.unshift(value);

    return this.length;
  }

  /** Removes the last element from the queue and returns it. */
  dequeue(): T | undefined {
    return this.#queue.pop();
  }

  /** Returns an element that will be removed from the queue next. */
  peek(): T | undefined {
    return this.#queue[this.length - 1];
  }

  get length(): number {
    return this.#queue.length;
  }
}

export default Queue;
