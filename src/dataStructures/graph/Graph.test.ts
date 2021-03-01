import {Graph} from './Graph';
import {GraphNode} from './GraphNode';

describe('GraphNode', () => {
  let node: GraphNode<string>;
  beforeEach(() => {
    node = new GraphNode('A');
  });

  test('existence', () => {
    expect(node).toBeDefined();
  });

  test('key', () => {
    expect(node.key).toEqual('A');
  });

  test('connections', () => {
    expect(node.connections).toBeDefined();
    expect(Array.isArray(node.connections)).toBeTruthy();
  });

  test('addConnection', () => {
    const connection = new GraphNode('B');
    node.addConnection(connection);

    expect(node.connections.length).toEqual(1);
    expect(node.connections.includes(connection)).toBe(true);
  });
});

describe('Graph', () => {
  let graph: Graph<string>;

  beforeEach(() => {
    graph = new Graph();
  });

  test('existence', () => {
    expect(graph).toBeDefined();
  });

  test('directed', () => {
    expect(graph.directed).toBe(false);

    graph = new Graph(true);
    expect(graph.directed).toBe(true);
  });

  test('addNode', () => {
    graph.addNode('A');

    expect(graph.nodes.map((n) => n.key).includes('A')).toBe(true);
  });

  test('getNode', () => {
    graph.addNode('A');

    expect(graph.getNode('A')?.key).toBe('A');
  });

  describe('addEdge', () => {
    test('undirected', () => {
      graph.addNode('A');
      graph.addNode('B');

      expect(graph.addEdge('A', 'B')).toBe(true);

      expect(
        graph
          ?.getNode('A')
          ?.connections.map((node) => node.key)
          .includes('B')
      ).toBe(true);
      expect(
        graph
          ?.getNode('B')
          ?.connections.map((node) => node.key)
          .includes('A')
      ).toBe(true);
    });

    test('directed', () => {
      graph = new Graph(true);
      graph.addNode('A');
      graph.addNode('B');

      expect(graph.addEdge('A', 'B')).toBe(true);

      expect(
        graph
          ?.getNode('A')
          ?.connections.map((node) => node.key)
          .includes('B')
      ).toBe(true);
      expect(
        graph
          ?.getNode('B')
          ?.connections.map((node) => node.key)
          .includes('A')
      ).toBe(false);
    });

    test('invalid edge', () => {
      expect(graph.addEdge('A', 'B')).toBe(false);
    });
  });

  test('nodes', () => {
    graph.addNode('A');
    graph.addNode('B');

    expect(graph.nodes).toBeDefined();
    expect(graph.nodes.length).toEqual(2);
  });

  test('edges', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');

    expect(graph.edges).toBeDefined();
    expect(graph.edges.length).toEqual(3);
  });

  describe('print', () => {
    test('undirected', () => {
      const nodes = ['A', 'B', 'C', 'D', 'E'];
      nodes.forEach((node) => {
        graph.addNode(node);
      });

      const edges = [
        ['A', 'B'],
        ['A', 'C'],
        ['A', 'E'],
        ['B', 'D'],
        ['C', 'D'],
      ];
      edges.forEach((edge) => {
        graph.addEdge(edge[0], edge[1]);
      });

      expect(graph.print()).toEqual(
        `A => B C E; B => A D; C => A D; D => B C; E => A`
      );
    });

    test('directed', () => {
      graph = new Graph(true);

      const nodes = ['A', 'B', 'C', 'D', 'E'];
      nodes.forEach((node) => {
        graph.addNode(node);
      });

      const edges = [
        ['A', 'B'],
        ['A', 'C'],
        ['A', 'E'],
        ['B', 'D'],
        ['C', 'D'],
      ];
      edges.forEach((edge) => {
        graph.addEdge(edge[0], edge[1]);
      });

      expect(graph.print()).toEqual(`A => B C E; B => D; C => D; D; E`);
    });
  });
});
