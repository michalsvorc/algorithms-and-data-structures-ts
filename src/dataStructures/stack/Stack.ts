export interface StackRequirements<T> {
  isEmpty(): boolean;
  push(value: T): number;
  pop(): T | undefined;
  peek(): T | undefined;
  length: number;
}

/** Class declaration for constructing a stack data structure. */
export class Stack<T> implements StackRequirements<T> {
  private _stack: T[] = [];

  /** Returns a boolean value indicating whether the stack has any elements. */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /** Appends new elements to the stack, and returns the new length of the stack. */
  push(value: T): number {
    return this._stack.push(value);
  }

  /** Removes the last element from the stack and returns it. */
  pop(): T | undefined {
    return this._stack.pop();
  }

  /** Returns an element that will be removed from the stack next. */
  peek(): T | undefined {
    return this._stack[this.length - 1];
  }

  get length(): number {
    return this._stack.length;
  }
}
