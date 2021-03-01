import {Graph} from '../../dataStructures/graph/Graph';
import {GraphNodeRequirements} from '../../dataStructures/graph/GraphNode';

/** Traversal function for DFS. Runs callback on passed node argument, then recurs on connected nodes. */
const traversal = <T>(visitedNodes: Set<T>) => (
  callback: (node: GraphNodeRequirements<T>) => void
) => (node: GraphNodeRequirements<T>) => {
  const {key} = node;

  if (visitedNodes.has(key)) return;

  callback(node);
  visitedNodes.add(key);

  node.connections.forEach((connectedNode): void => {
    const traverseGraph = traversal(visitedNodes)(callback);
    traverseGraph(connectedNode);
  });
};

/**
 * Performs Depth-first search (DFS) on a graph data structure.
 * Returns boolean based on starting node existence in the graph.
 */
export const graphDfs = <T>(graph: Graph<T>) => (
  callback: (node: GraphNodeRequirements<T>) => void
) => (key: T): boolean => {
  const startingNode = graph.getNode(key);

  if (startingNode === undefined) return false;

  /** Use Set data structure for keeping track of visited nodes. */
  const visitedNodes: Set<T> = new Set();

  /** Begin with traversal on the starting node. */
  traversal<T>(visitedNodes)(callback)(startingNode);
  return true;
};
