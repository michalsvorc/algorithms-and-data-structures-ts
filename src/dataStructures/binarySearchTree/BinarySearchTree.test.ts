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

      const result = bst.insert(10);

      expect(result).toBeTruthy();
      expect(bst.root?.value).toBe(10);
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

    it('prevents insertion of duplicates', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      bst.insert(20);
      bst.insert(30);

      const result1 = bst.insert(20);
      const result2 = bst.insert(30);

      expect(result1).toBeFalsy();
      expect(result2).toBeFalsy();
      expect(bst.inOrderRepresentation).toBe('10,20,30');
    });
  });

  describe('should remove', () => {
    it('nothing when BST is empty', () => {
      const bst = new BinarySearchTree();

      bst.remove(10);
      bst.remove(10);

      expect(bst.inOrderRepresentation).toBeNull();
    });

    it('node with one child', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      bst.insert(20);
      bst.remove(10);

      expect(bst.inOrderRepresentation).toBe('20');
    });

    it('node with one left child', () => {
      const bst = new BinarySearchTree();

      bst.insert(30);
      bst.insert(20);
      bst.insert(10);
      bst.remove(20);

      expect(bst.inOrderRepresentation).toBe('10,30');
    });

    it('node with one right child', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      bst.insert(20);
      bst.insert(30);
      bst.remove(20);

      expect(bst.inOrderRepresentation).toBe('10,30');
    });

    it('node with two children', () => {
      const bst = new BinarySearchTree();

      bst.insert(20);
      bst.insert(10);
      bst.insert(30);
      bst.remove(10);

      expect(bst.inOrderRepresentation).toBe('20,30');
    });

    it('root node', () => {
      const bst = new BinarySearchTree();

      const root = 20;

      bst.insert(root);
      bst.insert(10);
      bst.insert(30);
      bst.insert(25);
      bst.insert(50);

      bst.remove(root);

      expect(bst?.root?.value).toBe(25);
      expect(bst.inOrderRepresentation).toBe('10,25,30,50');
    });

    it('nonexistent node', () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      bst.insert(20);
      bst.insert(30);
      bst.remove(100);

      expect(bst.inOrderRepresentation).toBe('10,20,30');
    });
  });

  it('should find min and max values', () => {
    const bst = new BinarySearchTree();
    expect(bst.minValue).toBeNull;
    expect(bst.maxValue).toBeNull;

    const minValue = 10;
    const maxValue = 50;

    bst.insert(30);
    bst.insert(20);
    bst.insert(maxValue);
    bst.insert(minValue);
    bst.insert(40);

    expect(bst.minValue).toBe(minValue);
    expect(bst.maxValue).toBe(maxValue);
  });
});
