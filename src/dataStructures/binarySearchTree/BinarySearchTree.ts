import BinaryTreeNode, {IBinaryTreeNode} from './BinaryTreeNode';

interface IBinarySearchTree {
  isEmpty(): boolean;
  insert(value: number): boolean;
  remove(value: number): void;
  root: IBinaryTreeNode | null;
  minValue: number | null;
  maxValue: number | null;
  inOrderRepresentation: string | null;
}

/** Class declaration for constructing a Binary search tree (BST) value structure. */
export default class BinarySearchTree implements IBinarySearchTree {
  #root;

  constructor() {
    this.#root = null;
  }

  /** Returns a Boolean value indicating whether the BST has any nodes. */
  isEmpty(): boolean {
    return this.#root === null;
  }

  /** Inserts new node to BST. */
  insert(value: number): boolean {
    const newNode = new BinaryTreeNode(value);

    /** If BST is empty, insert new node as root. */
    if (this.isEmpty()) {
      this.#root = newNode;
      return this.#root;
    }

    /** Result of private class method for inserting nodes. */
    return this.insertNode(this.#root, newNode);
  }

  /** Traverse BST to find correct location for inserting the new node. */
  private insertNode(
    startingNode: IBinaryTreeNode,
    newNode: IBinaryTreeNode
  ): boolean {
    /** New node value is equal to starting node, insert nothing and return. */
    if (newNode.value === startingNode.value) {
      return false;
    }

    /** If the inserted value is less than the startingNode value, move left. */
    if (newNode.value < startingNode.value) {
      /** If left child is null, insert new node as left child. */
      if (startingNode.left === null) {
        startingNode.left = newNode;
        return true;
      }
      /** If left child is not null, recur to traverse further down the tree. */
      return this.insertNode(startingNode.left, newNode);
    } else {
      /**
       * Else the inserted value is greater than the startingNode value, move right.
       * If right child is null, insert new node as right child.
       */
      if (startingNode.right === null) {
        startingNode.right = newNode;
        return true;
      }

      /** if right child is not null, recur to traverse further down the tree. */
      return this.insertNode(startingNode.right, newNode);
    }
  }

  /** Removes a node with given value from BST. */
  remove(value: number): void {
    if (this.root === null) return;

    const lastVisitedNode = this.removeNode(this.root, value);

    /**
     * If we we want to remove the BST root node,
     * set root node with lastVisitedNode().
     */
    if (value === this.root.value) {
      this.#root = lastVisitedNode;
    }
  }

  /** Traverse BST to find the node with value and remove it. */
  private removeNode(
    node: IBinaryTreeNode | null,
    value: number
  ): IBinaryTreeNode | null {
    /** Base case to stop the traversal. */
    if (node === null) return null;

    if (value < node.value) {
      /** Value is less than provided node value, move to left subtree. */
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      /** Value is less than provided node value, move to right subtree. */
      node.right = this.removeNode(node.right, value);
    } else {
      /** We found node to delete. */
      if (node.left === null && node.right === null) {
        /** If node to delete has no children. */
        node = null;
      } else if (node.right === null && node.left) {
        /** If node to delete has only left child. */
        node = node.left;
      } else if (node.left === null && node.right) {
        /** If node to delete has only right child. */
        node = node.right;
      } else {
        /**
         * If node to delete has both children,
         * we need to find inOrder successor (minimum node of the right subtree).
         */
        const inOrderSuccessor = this.findMinNode(
          node.right as IBinaryTreeNode
        );

        /** Set node value to inOrderSuccessor value. */
        node.value = inOrderSuccessor.value;

        /** Remove inOrderSuccessor node from right subtree to not have duplicates. */
        node.right = this.removeNode(node.right, inOrderSuccessor.value);
      }
    }

    return node;
  }

  /** Finds the minimum node in the BTS */
  private findMinNode(node: IBinaryTreeNode): IBinaryTreeNode {
    /** If the leftmost node is null, then this must be the minimum node */
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }

  /** Finds the maximum node in the BTS */
  private findMaxNode(node: IBinaryTreeNode): IBinaryTreeNode {
    /** If the rightmost node is null, then this must be the maximum node */
    if (node.right === null) return node;
    return this.findMaxNode(node.right);
  }

  /**
   * Performs inOrder traversal of a tree starting from a given node
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
    traversalList.push(node.value);

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

  /** Gets node with minimal value. */
  get minValue(): number | null {
    if (this.isEmpty()) return null;
    return this.findMinNode(this.#root).value;
  }

  /** Gets node with maximum value. */
  get maxValue(): number | null {
    if (this.isEmpty()) return null;
    return this.findMaxNode(this.#root).value;
  }
}
