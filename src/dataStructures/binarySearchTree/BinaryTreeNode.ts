export interface BinaryTreeNodeRequirements<T> {
  value: T;
  left: BinaryTreeNodeRequirements<T> | null;
  right: BinaryTreeNodeRequirements<T> | null;
}

/** Class declaration for constructing a node for binary search tree (BST) value structure. */
export class BinaryTreeNode<T> implements BinaryTreeNodeRequirements<T> {
  private _value: T;
  private _left: BinaryTreeNode<T> | null;
  private _right: BinaryTreeNode<T> | null;

  constructor(value: T) {
    this._value = value;
    this._right = null;
    this._left = null;
  }

  /** Gets the value property of BST node. */
  get value(): T {
    return this._value;
  }

  /** Sets the value property of BST node. */
  set value(value: T) {
    this._value = value;
  }

  /** Gets the left child of BST node. */
  get left(): BinaryTreeNode<T> | null {
    return this._left;
  }

  /** Sets the left child of BST node. */
  set left(node: BinaryTreeNode<T> | null) {
    this._left = node;
  }

  /** Gets the right child of BST node. */
  get right(): BinaryTreeNode<T> | null {
    return this._right;
  }

  /** Sets the right child of BST node. */
  set right(node: BinaryTreeNode<T> | null) {
    this._right = node;
  }
}
