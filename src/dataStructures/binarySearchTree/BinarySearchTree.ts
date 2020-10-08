import BinaryTreeNode, {IBinaryTreeNode} from './BinaryTreeNode';

interface IBinarySearchTree {
  isEmpty(): boolean;
  insert(data: number): IBinaryTreeNode;
  root: IBinaryTreeNode | null;
  inOrderRepresentation: string | null;
}

/** Class declaration for constructing a Binary search tree (BST) data structure. */
export default class BinarySearchTree implements IBinarySearchTree {
  #root;

  constructor() {
    this.#root = null;
  }

  /** Returns a Boolean value indicating whether the BST has any nodes. */
  isEmpty(): boolean {
    return this.#root === null;
  }

  /** Insert new node to BST. */
  insert(data: number): IBinaryTreeNode {
    const newNode = new BinaryTreeNode(data);

    /** If BST is empty, insert new node as root. */
    if (this.isEmpty()) {
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

  /**
   * Perform inOrder traversal of a tree starting from a given node
   * 1. Traverse the left subtree i.e perform inOrder on left subtree
   * 2. Visit the root
   * 3. Traverse the right subtree i.e perform inOrder on right subtree
   */
  private traverseInOrder(node: IBinaryTreeNode): number[] {
    let traversalList: number[] = [];

    /** Add left node of current traversal level. */
    if (node.left) {
      traversalList = traversalList.concat(this.traverseInOrder(node.left));
    }

    /** Add root of current traversal level. */
    traversalList.push(node.data);

    /** Add right node of current traversal level. */
    if (node.right) {
      traversalList = traversalList.concat(this.traverseInOrder(node.right));
    }

    return traversalList;
  }

  /** Gets the root node of BST. */
  get root(): IBinaryTreeNode | null {
    return this.#root;
  }

  /** Gets string representation of BST in order traversal. */
  get inOrderRepresentation(): string | null {
    if (this.isEmpty()) return null;
    return this.traverseInOrder(this.#root).toString();
  }
}
