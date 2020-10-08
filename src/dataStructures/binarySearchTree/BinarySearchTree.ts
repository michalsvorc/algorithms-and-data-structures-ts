import BinaryTreeNode, {IBinaryTreeNode} from './BinaryTreeNode';

/** Class declaration for constructing a Binary search tree (BST) data structure. */
export default class BinarySearchTree {
  #root;

  constructor() {
    this.#root = null;
  }

  /** Insert new node to BST. */
  insert(data: number): IBinaryTreeNode {
    const newNode = new BinaryTreeNode(data);

    /** If BST is empty, insert new node as root. */
    if (this.#root === null) {
      this.#root = newNode;
      return this.#root;
    }

    /** Return result of private function for inserting nodes. */
    return this.insertNode(this.#root, newNode);
  }

  /** Traverse the tree to find correct location for inserting the new node. */
  private insertNode(
    currentNode: IBinaryTreeNode,
    newNode: IBinaryTreeNode
  ): IBinaryTreeNode {
    /** If the inserted value is less than the currentNode value, move left. */
    if (newNode.data < currentNode.data) {
      /** Left child is null, insert new node as left child. */
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return currentNode.left;
      }
      /** Left child is not null, recur to traverse further down the tree. */
      return this.insertNode(currentNode.left, newNode);
    }

    /**
     * If the inserted value is greater than the currentNode value, move right.
     * Right child is null, insert new node as left child.
     */
    if (currentNode.right === null) {
      currentNode.right = newNode;
      return currentNode.right;
    }

    /** Right child is not null, recur to traverse further down the tree. */
    return this.insertNode(currentNode.right, newNode);
  }

  /** Gets the root node of BST. */
  get root(): IBinaryTreeNode {
    return this.#root;
  }
}
