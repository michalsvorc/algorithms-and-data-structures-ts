import Queue, {IQueue} from '../queue/Queue';

interface IPriorityQueue<T> {
  isEmpty(): boolean;
  enqueue(value: T, isHighPriority: boolean): number;
  dequeue(): T | undefined;
  peek(): T | undefined;
  length: number;
}

/** Class declaration for constructing a Priority queue data structure. */
class PriorityQueue<T> implements IPriorityQueue<T> {
  #highPriorityQueue: IQueue<T>;
  #lowPriorityQueue: IQueue<T>;

  constructor() {
    this.#highPriorityQueue = new Queue();
    this.#lowPriorityQueue = new Queue();
  }

  /** Returns a Boolean value indicating whether the priority queue has any elements. */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /** Inserts new elements at the start of the priority queue based on their priority.Returns the priority queue length. */
  enqueue(value: T, isHighPriority: boolean): number {
    const queue = isHighPriority
      ? this.#highPriorityQueue
      : this.#lowPriorityQueue;

    queue.enqueue(value);

    return this.length;
  }

  /** Removes the last element based on its priority from the priority queue and returns it. */
  dequeue(): T | undefined {
    if (!this.#highPriorityQueue.isEmpty())
      return this.#highPriorityQueue.dequeue();

    return this.#lowPriorityQueue.dequeue();
  }

  /** Returns an element that will be removed from the queue next. */
  peek(): T | undefined {
    if (!this.#highPriorityQueue.isEmpty())
      return this.#highPriorityQueue.peek();

    return this.#lowPriorityQueue.peek();
  }

  /** Gets the length of the priority queue. */
  get length(): number {
    return this.#highPriorityQueue.length + this.#lowPriorityQueue.length;
  }
}

export default PriorityQueue;
