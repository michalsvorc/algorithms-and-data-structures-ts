import LinkedList from './LinkedList';
import LinkedNode from './LinkedNode';

describe('LinkedNode', () => {
  let node;
  beforeEach(() => {
    node = new LinkedNode('a');
  });

  test('instantiation', () => {
    expect(node).toBeDefined();
    expect(node.value).toEqual('a');
  });
});

describe('Linked List', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('instantiation', () => {
    expect(linkedList).toBeDefined();
  });

  test('length', () => {
    expect(linkedList.length).toEqual(0);
  });

  test('head', () => {
    expect(linkedList.head).toBeNull();

    const a = linkedList.push('a');
    expect(linkedList.head).toEqual(a);
  });

  test('tail', () => {
    expect(linkedList.tail).toBeNull();

    const a = linkedList.push('a');
    expect(linkedList.tail).toEqual(a);
  });

  test('isEmpty', () => {
    expect(linkedList.isEmpty()).toBe(true);
    linkedList.push('a');
    expect(linkedList.isEmpty()).toBe(false);
  });

  test('push', () => {
    linkedList.push('a');
    expect(linkedList.head.value).toEqual('a');
    expect(linkedList.tail.value).toEqual('a');
    expect(linkedList.length).toEqual(1);

    const b = linkedList.push('b');

    expect(linkedList.head.next).toEqual(b);
    expect(linkedList.tail).toEqual(b);
    expect(linkedList.length).toEqual(2);
  });

  test('pop', () => {
    /** Empty list */
    expect(linkedList.pop()).toEqual(null);
    expect(linkedList.length).toEqual(0);

    /** List of length 1 */
    linkedList.push(1);
    expect(linkedList.length).toEqual(1);
    const node = linkedList.pop();

    expect(node.value).toEqual(1);
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
    expect(linkedList.length).toEqual(0);

    /** List of length < 1 */
    const values = ['a', 'b', 'c', 'd', 'e'];
    values.map((val) => linkedList.push(val));

    expect(linkedList.pop().value).toEqual('e');
    expect(linkedList.tail.value).toEqual('d');
    expect(linkedList.length).toEqual(4);
  });

  test('getNode', () => {
    const values = ['a', 'b', 'c', 'd', 'e'];
    const nodes = values.map((val) => linkedList.push(val));

    const badIndexCase1 = linkedList.getNode(-1);
    expect(badIndexCase1).toBeNull();

    const badIndexCase2 = linkedList.getNode(values.length);
    expect(badIndexCase2).toBeNull();

    const head = linkedList.getNode(0);
    expect(head).toEqual(nodes[0]);

    for (let index = 0; index < values.length; index++) {
      expect(linkedList.getNode(index)).toEqual(nodes[index]);
    }
  });

  describe('deleteNode', () => {
    const values = ['a', 'b', 'c', 'd', 'e'];
    let nodes;

    beforeEach(() => {
      linkedList = new LinkedList();
      nodes = values.map((val) => linkedList.push(val));
    });

    test('bad indexes', () => {
      const badIndex1 = linkedList.deleteNode(-1);
      expect(badIndex1).toBeNull();

      const badIndex2 = linkedList.deleteNode(values.length);
      expect(badIndex2).toBeNull();
    });

    test('head', () => {
      const head = linkedList.deleteNode(0);

      expect(head).toEqual(nodes[0]);
      expect(linkedList.length).toEqual(values.length - 1);
    });

    test('middle index', () => {
      const index = Math.round(values.length / 2);
      const c = linkedList.deleteNode(index);

      expect(c).toEqual(nodes[index]);
      expect(linkedList.length).toEqual(values.length - 1);
    });

    test('tail', () => {
      const tail = linkedList.deleteNode(values.length - 1);

      expect(tail).toEqual(nodes[nodes.length - 1]);
      expect(linkedList.tail.value).not.toEqual(tail.value);
      expect(linkedList.tail).toEqual(nodes[nodes.length - 2]);
      expect(linkedList.tail.next).toBeNull();
      expect(linkedList.length).toEqual(values.length - 1);
    });
  });

  test('print', () => {
    const values = ['a', 'b', 'c', 'd', 'e'];
    values.forEach((val) => {
      linkedList.push(val);
    });

    expect(linkedList.print()).toEqual(values.join(' => '));
  });
});
