import GraphNode, {IGraphNode} from './GraphNode';

interface IGraph<T> {
  nodes: IGraphNode<T>[];
  edges: string[];
  directed: boolean;
  addNode: (key: T) => IGraphNode<T>;
  getNode: (key: T) => IGraphNode<T> | undefined;
  addEdge: (key0: T, key1: T) => boolean;
  print: () => string;
}

class Graph<T> implements IGraph<T> {
  #nodes: IGraphNode<T>[] = [];
  #edges: string[] = [];
  #directed: boolean;

  constructor(directed = false) {
    this.#directed = directed;
  }

  addNode(key: T): IGraphNode<T> {
    const node = new GraphNode(key);
    this.#nodes.push(node);
    return node;
  }

  addEdge(key0: T, key1: T): boolean {
    const node0 = this.getNode(key0);
    const node1 = this.getNode(key1);

    if (node0 === undefined || node1 === undefined) return false;

    node0.addConnection(node1);

    if (!this.#directed) node1.addConnection(node0);

    this.#edges.push(`${key0}-${key1}`);

    return true;
  }

  getNode(key: T): IGraphNode<T> | undefined {
    return this.#nodes.find((node) => node.key === key);
  }

  print(): string {
    return this.nodes
      .map(({key, connections}) => {
        let result = `${key}`;

        if (connections.length) {
          result += ` => ${connections.map((node) => node.key).join(' ')}`;
        }

        return result;
      })
      .join('; ');
  }

  get nodes(): IGraphNode<T>[] {
    return this.#nodes;
  }

  get edges(): string[] {
    return this.#edges;
  }

  get directed(): boolean {
    return this.#directed;
  }
}

export default Graph;
