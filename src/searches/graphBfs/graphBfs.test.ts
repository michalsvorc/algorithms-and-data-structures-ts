import Graph from '../../dataStructures/graph/Graph';
import graphBfs from './graphBfs';

describe('Breadth-First Search', () => {
  const graph = new Graph();

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

  edges.forEach((edge: [string, string]) => {
    graph.addEdge(...edge);
  });

  test('existing node', () => {
    let result = '';

    function visit(node) {
      result += result.length === 0 ? node.key : ` => ${node.key}`;
    }

    const search = graphBfs(graph, 'A', visit);

    expect(search).toBe(true);
    expect(result).toEqual('A => B => C => E => D');
  });

  test('non-existent node', () => {
    expect(graphBfs(graph, 'X', (node) => node)).toBe(false);
  });
});
