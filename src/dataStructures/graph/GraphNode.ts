export interface IGraphNode<T> {
  key: T;
  connections: IGraphNode<T>[];
  addConnection: (node: IGraphNode<T>) => void;
}

class GraphNode<T> implements IGraphNode<T> {
  #key: T;
  #connections: IGraphNode<T>[] = [];

  constructor(key: T) {
    this.#key = key;
  }

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
