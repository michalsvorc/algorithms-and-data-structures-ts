import {GraphRequirements} from '../../dataStructures/graph/Graph';
import {GraphNodeRequirements} from '../../dataStructures/graph/GraphNode';
import {Queue} from '../../dataStructures/queue/Queue';

/**
 * Performs Breadth-first search (BFS) on a graph data structure.
 * Returns boolean based on starting node existence in the graph.
 */
export const graphBfs = <T>(graph: GraphRequirements<T>) => (
  callback: (node: GraphNodeRequirements<T>) => void
) => (key: T): boolean => {
  const startingNode = graph.getNode(key);

  if (startingNode === undefined) return false;

  /** Set object for keeping track of visited nodes. */
  const visitedNodes = new Set();

  /** Queue of nodes waiting for visit. */
  const queue: Queue<GraphNodeRequirements<typeof key>> = new Queue();

  /** Begin with adding the starting node into the queue. */
  queue.enqueue(startingNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue() as GraphNodeRequirements<typeof key>;

    /** Run callback function on unvisited node and mark it as visited. */
    if (!visitedNodes.has(currentNode.key)) {
      callback(currentNode);
      visitedNodes.add(currentNode.key);
    }

    /** Add all unvisited connected nodes to Queue for next iteration. */
    currentNode.connections.forEach((node) => {
      if (visitedNodes.has(node.key)) return;
      queue.enqueue(node);
    });
  }

  return true;
};
