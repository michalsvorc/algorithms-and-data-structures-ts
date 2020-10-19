import {IGraph} from '../../dataStructures/graph/Graph';
import {IGraphNode} from '../../dataStructures/graph/GraphNode';

/** Traversal function for DFS. Runs callback on passed node argument, then recurs on connected nodes. */
const traversal = (visitedNodes) => (callback) => (node) => {
  const {key} = node;

  if (visitedNodes.has(key)) return;

  callback(node);
  visitedNodes.add(key);

  node.connections.forEach((connectedNode) => {
    const traverseGraph = traversal(visitedNodes)(callback);
    traverseGraph(connectedNode);
  });
};

/**
 * Performs Depth-first search (DFS) on a graph data structure.
 * Returns boolean based on starting node existence in the graph.
 */
const graphDfs = <T>(graph: IGraph<T>) => (
  callback: (node: IGraphNode<T>) => any
) => (key: T): boolean => {
  const startingNode = graph.getNode(key);

  if (startingNode === undefined) return false;

  /** Set object for keeping track of visited nodes. */
  const visitedNodes = new Set();

  /** Begin with traversal on the starting node. */
  const traverseGraph = traversal(visitedNodes)(callback);
  traverseGraph(startingNode);
  return true;
};

export default graphDfs;
