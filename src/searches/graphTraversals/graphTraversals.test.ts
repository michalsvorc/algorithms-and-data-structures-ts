import {Graph} from '../../dataStructures/graph/Graph';

import {graphBfs} from './graphBfs';
import {graphDfs} from './graphDfs';

const graph: Graph<string> = new Graph();

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

describe('Breadth-first search', () => {
  test('existing node', () => {
    const result: string[] = [];

    const callback = ({key}: {key: string}) => {
      result.push(key);
    };

    const search = graphBfs(graph)(callback)('A');

    expect(search).toBe(true);
    expect(result.join(' => ')).toEqual('A => B => C => E => D');
  });

  test('non-existent node', () => {
    expect(graphBfs(graph)(() => null)('X')).toBe(false);
  });
});

describe('Depth-first search', () => {
  test('existing node', () => {
    const result: string[] = [];

    const callback = ({key}: {key: string}) => {
      result.push(key);
    };

    const search = graphDfs(graph)(callback)('A');

    expect(search).toBe(true);
    expect(result.join(' => ')).toEqual('A => B => D => C => E');
  });

  test('non-existent node', () => {
    expect(graphDfs(graph)(() => null)('X')).toBe(false);
  });
});
