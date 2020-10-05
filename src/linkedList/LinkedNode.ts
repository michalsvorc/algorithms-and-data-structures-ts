export interface ILinkedNode<T> {
  value: T;
  next: ILinkedNode<T> | null;
}

export type TLinkedNodeNullable<T> = ILinkedNode<T> | null;

class LinkedNode<T> implements ILinkedNode<T> {
  #value: T;
  next: TLinkedNodeNullable<T>;

  constructor(value: T) {
    this.#value = value;
    this.next = null;
  }

  get value(): T {
    return this.#value;
  }
}

export default LinkedNode;
