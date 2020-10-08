export interface IBinaryTreeNode {
  data: number;
  left: IBinaryTreeNode | null;
  right: IBinaryTreeNode | null;
}

/** Class declaration for constructing a Node for Binary search tree (BST) data structure. */
export default class BinaryTreeNode implements IBinaryTreeNode {
  #data;
  #left;
  #right;

  constructor(value: number) {
    this.#data = value;
    this.#right = null;
    this.#left = null;
  }

  /** Gets the data property of BST node. */
  get data(): IBinaryTreeNode['data'] {
    return this.#data;
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
