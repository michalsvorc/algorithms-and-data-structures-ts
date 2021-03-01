export interface GraphNodeRequirements<T> {
  key: T;
  connections: GraphNodeRequirements<T>[];
  addConnection: (node: GraphNodeRequirements<T>) => void;
}

/** Class declaration for constructing a node for graph data structure. */
export class GraphNode<T> implements GraphNodeRequirements<T> {
  private _key: T;
  private _connections: GraphNodeRequirements<T>[] = [];

  /** Graph node constructor function. Accepts graph node key as an argument. */
  constructor(key: T) {
    this._key = key;
  }

  /** Set connection to another node. Connections are held in private internal array. */
  addConnection(node: GraphNodeRequirements<T>): void {
    this._connections.push(node);
  }

  get connections(): GraphNodeRequirements<T>[] {
    return this._connections;
  }

  get key(): T {
    return this._key;
  }
}
