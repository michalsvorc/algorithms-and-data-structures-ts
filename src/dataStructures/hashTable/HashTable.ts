type Key = string;

interface IHashTable<T> {
  setValue: (key: string, value: T) => number;
  getValue: (key: string) => T | undefined;
  hashFunction: (string: string) => number;
}

/** Class declaration for constructing a hash table data structure. */
class HashTable<T> implements IHashTable<T> {
  #table: [Key, T][][];
  /** Prime number for hash function */
  #hashingPrime = 13;

  /** Hash table constructor function. Accepts initial table size number. */
  constructor(tableSize: number) {
    this.#table = new Array(tableSize);
  }

  /** Computes an index (hash code) from a key. */
  hashFunction(key: Key): number {
    /** Hash code starts with a prime number for more salt in index computation. */
    let hash = 31;

    /** Compute hash through multiple passes. */
    for (let i = 0; i < key.length; ++i) {
      hash =
        (hash * this.#hashingPrime * key.charCodeAt(i)) % this.#table.length;
    }

    return hash;
  }

  /* Stores value in hash table. Returns length of table slot array. */
  setValue(key: Key, value: T): number {
    const index = this.hashFunction(key);

    /** If hash table slot is not initialized, initialize it to an empty array. */
    if (this.#table[index] === undefined) {
      this.#table[index] = [];
    }

    /** Store [key, value] sub-array in table slot array. */
    this.#table[index].push([key, value]);

    return this.#table[index].length;
  }

  /** Gets value from hash table. */
  getValue(key: Key): T | undefined {
    const index = this.hashFunction(key);

    /** If hash table slot is not initialized. */
    if (!Array.isArray(this.#table[index])) return undefined;

    const tableArray = this.#table[index].find(([k]) => k === key);

    /** If vale was not found in hash table slot. */
    if (tableArray === undefined) return undefined;

    const [, value] = tableArray;

    return value;
  }
}

export default HashTable;
