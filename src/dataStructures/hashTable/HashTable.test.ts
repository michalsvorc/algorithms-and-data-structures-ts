import {HashTable} from './HashTable';

describe('HashTable', () => {
  describe('with proper table size', () => {
    const hashTable = new HashTable(17);

    const alice = {key: 'Alice', value: 'A'};
    const bob = {key: 'Bob', value: 'B'};

    test('existence', () => {
      expect(hashTable).toBeDefined();
    });

    test('set value', () => {
      expect(hashTable.setValue(alice.key, alice.value)).toBe(1);
      expect(hashTable.setValue(bob.key, bob.value)).toBe(1);
    });

    test('get value', () => {
      expect(hashTable.getValue(alice.key)).toBe(alice.value);
      expect(hashTable.getValue(bob.key)).toBe(bob.value);
    });
  });

  describe('with table size of 1', () => {
    const hashTable = new HashTable(1);

    const alice = {key: 'Alice', value: 'A'};
    const bob = {key: 'Bob', value: 'B'};

    test('get value from empty table', () => {
      expect(hashTable.getValue('Xavier')).toBeUndefined();
    });

    test('get non-existing value', () => {
      expect(hashTable.setValue(alice.key, alice.value)).toBe(1);
      expect(hashTable.getValue('Xavier')).toBeUndefined();
    });

    test('set value to the same slot', () => {
      expect(hashTable.setValue(bob.key, bob.value)).toBe(2);
    });

    test('get value from the same slot', () => {
      expect(hashTable.getValue(alice.key)).toBe(alice.value);
      expect(hashTable.getValue(bob.key)).toBe(bob.value);
    });
  });
});
