import {LinkedNode, TLinkedNodeNullable} from './LinkedNode';

export interface LinkedListRequirements<T> {
  isEmpty(): boolean;
  push(value: T): LinkedNode<T>;
  pop(): TLinkedNodeNullable<T>;
  getNode(index: number): TLinkedNodeNullable<T>;
  deleteNode(index: number): TLinkedNodeNullable<T>;
  print(): string;
  head: TLinkedNodeNullable<T>;
  tail: TLinkedNodeNullable<T>;
  length: number;
}

/** Class declaration for constructing a linked list data structure. */
export class LinkedList<T> implements LinkedListRequirements<T> {
  private _head: TLinkedNodeNullable<T> = null;
  private _tail: TLinkedNodeNullable<T> = null;
  private _length = 0;

  /** Returns a Boolean value indicating whether the linked list has any nodes. */
  isEmpty(): boolean {
    return this._length === 0;
  }

  /** Appends new node to the linked list, and returns the appended node. */
  push(value: T): LinkedNode<T> {
    const linkedNode = new LinkedNode(value);

    /**
     * If we don't currently have a head, our list's head property is set to our new node.
     * However, if we do have a head, then we know we have a current tail, we need to set
     * our current tail's next property to our new node.
     */
    if (this._head === null) {
      this._head = linkedNode;
    } else {
      this._tail && (this._tail.next = linkedNode);
    }

    this._tail = linkedNode;
    this._length++;

    return linkedNode;
  }

  /** Removes the tail node from the linked list and returns it. */
  pop(): TLinkedNodeNullable<T> {
    if (this.isEmpty()) return null;

    /** Tail node we're going to return. */
    const node = this._tail;

    /**
     * A list of length 1 means that our head and our tail are the same node, so we set both
     * our head and tail back to null. Our length will need to be reset to 0 or decremented,
     * either way gets us to a length of 0. Then we return the node we stored.
     */
    if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
    } else {
      let currentNode = this._head;
      let penultimateNode;

      /** Linked nodes traversal. */
      while (currentNode) {
        /** Penultimate node encountered. */
        if (currentNode.next === this._tail) {
          penultimateNode = currentNode;
          break;
        }

        /** Set the next node for next iteration. */
        currentNode = currentNode.next;
      }

      if (penultimateNode?.next) {
        penultimateNode.next = null;
      }

      this._tail = penultimateNode || null;
    }

    this._length--;

    return node;
  }

  /** Returns a node at provided index position in the linked list sequence. */
  getNode(index: number): TLinkedNodeNullable<T> {
    if (index < 0 || index >= this._length) {
      return null;
    }

    if (index === 0) {
      return this._head;
    }

    let currentNode = this._head;
    let i = 0;

    while (i < index) {
      i++;
      currentNode = currentNode && currentNode.next;
    }

    return currentNode;
  }

  /** Removes a node at provided index position in the linked list sequence and returns it. */
  deleteNode(index: number): TLinkedNodeNullable<T> {
    if (index < 0 || index > this._length - 1) {
      return null;
    }

    let deletedNode;

    if (index === 0) {
      deletedNode = this._head;

      this._head = this._head && this._head.next;
    } else {
      let currentNode = this._head;
      let previousNode;

      /**
       * We're going to loop through each node in linked list, incrementing an iterator with each loop.
       * When we get to our matching item (at passed index), we'll simply set our previous node's next property
       * to equal our current node's next property, effectively slicing out and returning that current node.
       */
      let i = 0;
      while (i < index) {
        i++;
        previousNode = currentNode;
        currentNode = currentNode && currentNode.next;
      }

      deletedNode = currentNode;

      if (previousNode?.next) {
        previousNode.next = currentNode && currentNode.next;
      }

      /** If we deleted the tail node, set previous node as the linked list tail. */
      if (previousNode?.next === null) {
        this._tail = previousNode;
      }
    }

    this._length--;

    return deletedNode;
  }

  /** Returns a string composed from all node values of the linked list. */
  print(): string {
    const values: T[] = [];
    let currentNode = this._head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values.join(' => ');
  }

  get head(): TLinkedNodeNullable<T> {
    return this._head;
  }

  get tail(): TLinkedNodeNullable<T> {
    return this._tail;
  }

  get length(): number {
    return this._length;
  }
}
