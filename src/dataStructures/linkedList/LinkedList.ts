import LinkedNode, {TLinkedNodeNullable} from './LinkedNode';

interface ILinkedList<T> {
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
class LinkedList<T> implements ILinkedList<T> {
  #head: TLinkedNodeNullable<T> = null;
  #tail: TLinkedNodeNullable<T> = null;
  #length = 0;

  /** Returns a Boolean value indicating whether the linked list has any nodes. */
  isEmpty(): boolean {
    return this.#length === 0;
  }

  /** Appends new node to the linked list, and returns the appended node. */
  push(value: T): LinkedNode<T> {
    const linkedNode = new LinkedNode(value);

    /**
     * If we don't currently have a head, our list's head property is set to our new node.
     * However, if we do have a head, then we know we have a current tail, we need to set
     * our current tail's next property to our new node.
     */
    if (this.#head === null) {
      this.#head = linkedNode;
    } else {
      this.#tail && (this.#tail.next = linkedNode);
    }

    this.#tail = linkedNode;
    this.#length++;

    return linkedNode;
  }

  /** Removes the tail node from the linked list and returns it. */
  pop(): TLinkedNodeNullable<T> {
    if (this.isEmpty()) return null;

    /** Tail node we're going to return. */
    const node = this.#tail;

    /**
     * A list of length 1 means that our head and our tail are the same node, so we set both
     * our head and tail back to null. Our length will need to be reset to 0 or decremented,
     * either way gets us to a length of 0. Then we return the node we stored.
     */
    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
    } else {
      let currentNode = this.#head;
      let penultimateNode;

      /** Linked nodes traversal. */
      while (currentNode) {
        /** Penultimate node encountered. */
        if (currentNode.next === this.#tail) {
          penultimateNode = currentNode;
          break;
        }

        /** Set the next node for next iteration. */
        currentNode = currentNode.next;
      }

      penultimateNode.next = null;
      this.#tail = penultimateNode;
    }

    this.#length--;

    return node;
  }

  /** Returns a node at provided index position in the linked list sequence. */
  getNode(index: number): TLinkedNodeNullable<T> {
    if (index < 0 || index >= this.#length) {
      return null;
    }

    if (index === 0) {
      return this.#head;
    }

    let currentNode = this.#head;
    let i = 0;

    while (i < index) {
      i++;
      currentNode = currentNode && currentNode.next;
    }

    return currentNode;
  }

  /** Removes a node at provided index position in the linked list sequence and returns it. */
  deleteNode(index: number): TLinkedNodeNullable<T> {
    if (index < 0 || index > this.#length - 1) {
      return null;
    }

    let deletedNode;

    if (index === 0) {
      deletedNode = this.#head;

      this.#head = this.#head && this.#head.next;
    } else {
      let currentNode = this.#head;
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
      previousNode.next = currentNode && currentNode.next;

      /** If we deleted the tail node, set previous node as the linked list tail. */
      if (previousNode.next === null) {
        this.#tail = previousNode;
      }
    }

    this.#length--;

    return deletedNode;
  }

  /** Returns a string composed from all node values of the linked list. */
  print(): string {
    const values: T[] = [];
    let currentNode = this.#head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values.join(' => ');
  }

  get head(): TLinkedNodeNullable<T> {
    return this.#head;
  }

  get tail(): TLinkedNodeNullable<T> {
    return this.#tail;
  }

  get length(): number {
    return this.#length;
  }
}

export default LinkedList;
