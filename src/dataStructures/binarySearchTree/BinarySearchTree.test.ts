import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeNull();
  });

  describe('should insert', () => {
    it('root node', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      expect(bst.root.data).toBe(10);
      expect(bst.root.left).toBeNull;
      expect(bst.root.right).toBeNull;
    });

    it('nodes to create balanced tree', () => {
      const bst = new BinarySearchTree();

      bst.insert(20);
      const insertedNode1 = bst.insert(10);
      const insertedNode2 = bst.insert(30);

      const leftChild = bst.root.left;
      const rightChild = bst.root.right;

      expect(leftChild?.data).toBe(insertedNode1.data);
      expect(rightChild?.data).toBe(insertedNode2.data);

      expect(leftChild?.left).toBeNull;
      expect(leftChild?.right).toBeNull;
      expect(rightChild?.left).toBeNull;
      expect(rightChild?.right).toBeNull;
    });

    it('nodes to create left leafed tree', () => {
      const bst = new BinarySearchTree();

      bst.insert(30);
      const insertedNode1 = bst.insert(20);
      const insertedNode2 = bst.insert(10);

      expect(bst.root?.left?.data).toBe(insertedNode1.data);
      expect(bst.root?.left?.left?.data).toBe(insertedNode2.data);

      expect(bst.root.right).toBeNull;
      expect(bst.root?.left?.right).toBeNull;
    });

    it('nodes to create right leafed tree', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      const insertedNode1 = bst.insert(20);
      const insertedNode2 = bst.insert(30);

      expect(bst.root?.right?.data).toBe(insertedNode1.data);
      expect(bst.root?.right?.right?.data).toBe(insertedNode2.data);

      expect(bst.root.left).toBeNull;
      expect(bst.root?.right?.left).toBeNull;
    });
  });
});
