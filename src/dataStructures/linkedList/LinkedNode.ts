export interface LinkedNodeRequirements<T> {
  value: T;
  next: LinkedNodeRequirements<T> | null;
}

export type TLinkedNodeNullable<T> = LinkedNode<T> | null;

/** Class declaration for constructing a node for linked list data structure. */
export class LinkedNode<T> implements LinkedNodeRequirements<T> {
  private _value: T;
  next: TLinkedNodeNullable<T>;

  /** Linked node constructor. Accepts linked node value as an argument. */
  constructor(value: T) {
    this._value = value;
    this.next = null;
  }

  get value(): T {
    return this._value;
  }
}
