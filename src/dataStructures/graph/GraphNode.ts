export interface IGraphNode<T> {
  key: T;
  connections: IGraphNode<T>[];
  addConnection: (node: IGraphNode<T>) => void;
}

/** Class declaration for constructing a node for graph data structure. */
class GraphNode<T> implements IGraphNode<T> {
  #key: T;
  #connections: IGraphNode<T>[] = [];

  /** Graph node constructor function. Accepts graph node key as an argument. */
  constructor(key: T) {
    this.#key = key;
  }

  /** Set connection to another node. Connections are held in private internal array. */
  addConnection(node: IGraphNode<T>): void {
    this.#connections.push(node);
  }

  get connections(): IGraphNode<T>[] {
    return this.#connections;
  }

  get key(): T {
    return this.#key;
  }
}

export default GraphNode;
