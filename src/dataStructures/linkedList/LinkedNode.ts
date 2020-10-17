export interface ILinkedNode<T> {
  value: T;
  next: ILinkedNode<T> | null;
}

export type TLinkedNodeNullable<T> = ILinkedNode<T> | null;

/** Class declaration for constructing a node for linked list data structure. */
class LinkedNode<T> implements ILinkedNode<T> {
  #value: T;
  next: TLinkedNodeNullable<T>;

  /** Linked node constructor. Accepts linked node value as an argument. */
  constructor(value: T) {
    this.#value = value;
    this.next = null;
  }

  get value(): T {
    return this.#value;
  }
}

export default LinkedNode;
