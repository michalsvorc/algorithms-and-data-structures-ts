import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeNull();
    expect(bst.isEmpty()).toBeTruthy();
    expect(bst.inOrderRepresentation).toBeNull();
  });

  describe('should insert', () => {
    it('root node', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      expect(bst.root?.data).toBe(10);
      expect(bst.inOrderRepresentation).toBe('10');
    });

    it('nodes to create balanced tree', () => {
      const bst = new BinarySearchTree();

      bst.insert(20);
      bst.insert(10);
      bst.insert(30);

      expect(bst.inOrderRepresentation).toBe('10,20,30');
    });

    it('nodes to create left leafed tree', () => {
      const bst = new BinarySearchTree();

      bst.insert(30);
      bst.insert(20);
      bst.insert(10);

      expect(bst.inOrderRepresentation).toBe('10,20,30');
    });

    it('nodes to create right leafed tree', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      bst.insert(20);
      bst.insert(30);

      expect(bst.inOrderRepresentation).toBe('10,20,30');
    });
  });
});
