import Queue from '../../dataStructures/queue/Queue';
import {IGraph} from '../../dataStructures/graph/Graph';
import {IGraphNode} from '../../dataStructures/graph/GraphNode';

/**
 * Performs Breadth-First Search (BFS) on a graph data structure.
 * Returns boolean based on starting node existence in the graph.
 */
const graphBfs: <T>(
  graph: IGraph<T>,
  key: T,
  callback: (node: IGraphNode<T>) => any
) => boolean = function (graph, key, callback) {
  const startingNode = graph.getNode(key);

  if (startingNode === undefined) return false;

  /** Set for keeping track of visited nodes. */
  const visitedNodes = new Set();

  /** Queue of nodes waiting for visit. */
  const queue: Queue<IGraphNode<typeof key>> = new Queue();

  /** Start with putting the starting node into the queue. */
  queue.enqueue(startingNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue() as IGraphNode<typeof key>;

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

export default graphBfs;
