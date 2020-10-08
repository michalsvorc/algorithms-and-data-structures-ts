interface IStack<T> {
  isEmpty(): boolean;
  push(value: T): number;
  pop(): T | undefined;
  peek(): T | undefined;
  length: number;
}

/** Class declaration for constructing a Stack data structure. */
class Stack<T> implements IStack<T> {
  #stack: T[] = [];

  /** Returns a Boolean value indicating whether the stack has any elements. */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /** Appends new elements to the stack, and returns the new length of the stack. */
  push(value: T): number {
    return this.#stack.push(value);
  }

  /** Removes the last element from the stack and returns it. */
  pop(): T | undefined {
    return this.#stack.pop();
  }

  /** Returns an element that will be removed from the stack next. */
  peek(): T | undefined {
    return this.#stack[this.length - 1];
  }

  /** Gets the length of the stack. */
  get length(): number {
    return this.#stack.length;
  }
}

export default Stack;
