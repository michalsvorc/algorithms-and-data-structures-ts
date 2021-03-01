import {GraphNode, GraphNodeRequirements} from './GraphNode';

export interface GraphRequirements<T> {
  nodes: GraphNodeRequirements<T>[];
  edges: string[];
  directed: boolean;
  addNode: (key: T) => GraphNodeRequirements<T>;
  getNode: (key: T) => GraphNodeRequirements<T> | undefined;
  addEdge: (key0: T, key1: T) => boolean;
  print: () => string;
}

/** Class declaration for constructing a graph data structure. */
export class Graph<T> implements GraphRequirements<T> {
  private _nodes: GraphNodeRequirements<T>[] = [];
  private _edges: string[] = [];
  private _directed: boolean;

  /** Graph constructor function. Accepts boolean for setting this graph as directed graph. */
  constructor(directed = false) {
    this._directed = directed;
  }

  /** Adds node to graph and returns newly created node. */
  addNode(key: T): GraphNodeRequirements<T> {
    const node = new GraphNode(key);
    this._nodes.push(node);
    return node;
  }

  /**
   * Adds edge between graph nodes. It sets connection in each individual node private connections array,
   * and writes edge in string representation to graph private edges array.
   */
  addEdge(key0: T, key1: T): boolean {
    const node0 = this.getNode(key0);
    const node1 = this.getNode(key1);

    if (node0 === undefined || node1 === undefined) return false;

    node0.addConnection(node1);

    if (!this._directed) node1.addConnection(node0);

    this._edges.push(`${key0}-${key1}`);

    return true;
  }

  /** Adds edge between graph nodes. It sets connection in each individual node private connections array. */
  getNode(key: T): GraphNodeRequirements<T> | undefined {
    return this._nodes.find((node) => node.key === key);
  }

  /** Prints graph in string representation. */
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

  get nodes(): GraphNodeRequirements<T>[] {
    return this._nodes;
  }

  get edges(): string[] {
    return this._edges;
  }

  get directed(): boolean {
    return this._directed;
  }
}
