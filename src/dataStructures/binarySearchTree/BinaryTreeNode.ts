export interface IBinaryTreeNode {
  value: number;
  left: IBinaryTreeNode | null;
  right: IBinaryTreeNode | null;
}

/** Class declaration for constructing a node for binary search tree (BST) value structure. */
export default class BinaryTreeNode implements IBinaryTreeNode {
  #value;
  #left;
  #right;

  constructor(value: number) {
    this.#value = value;
    this.#right = null;
    this.#left = null;
  }

  /** Gets the value property of BST node. */
  get value(): IBinaryTreeNode['value'] {
    return this.#value;
  }

  /** Sets the value property of BST node. */
  set value(value: IBinaryTreeNode['value']) {
    this.#value = value;
  }

  /** Gets the left child of BST node. */
  get left(): IBinaryTreeNode['left'] {
    return this.#left;
  }

  /** Sets the left child of BST node. */
  set left(node: IBinaryTreeNode['left']) {
    this.#left = node;
  }

  /** Gets the right child of BST node. */
  get right(): IBinaryTreeNode['right'] {
    return this.#right;
  }

  /** Sets the right child of BST node. */
  set right(node: IBinaryTreeNode['right']) {
    this.#right = node;
  }
}
