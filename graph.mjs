import { createQueue } from './queue.mjs'
function createNode(key) {
  const neighbors = []
  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node)
    },
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []

  return {
    nodes,
    edges,
    directed,
    getNode(key) {
      return nodes.find((node) => node.key === key)
    },
    addNode(key) {
      const exists = this.getNode(key)
      if (exists) {
        return exists
      }
      const node = createNode(key)
      nodes.push(node)
      return node
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key)
      const node2 = this.getNode(node2key)
      node1.addNeighbor(node2)
      if (!directed) {
        node2.addNeighbor(node1)
        edges.push(`${node1key} <=> ${node2key}`)
      } else {
        edges.push(`${node1key} => ${node2key}`)
      }
    },
    breadthSearch(startingNodeKey, visitFn) {
      const record = nodes.reduce((acc, curr) => {
        acc[curr.key] = false
        return acc
      }, {})
      const startingNode = this.getNode(startingNodeKey)
      const queue = createQueue()
      queue.enqueue(startingNode)
      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue()
        if (!record[currentNode.key]) {
          visitFn(currentNode)
          record[currentNode.key] = true
        }
        currentNode.neighbors.forEach((neighbor) => {
          if (!record[neighbor.key]) {
            queue.enqueue(neighbor)
          }
        })
      }
    },
    depthSearch(startingNodeKey, visitFn) {
      const record = nodes.reduce((acc, curr) => {
        acc[curr.key] = false
        return acc
      }, {})
      const startingNode = this.getNode(startingNodeKey)
      function explore(node) {
        if (record[node.key]) return
        visitFn(node)
        record[node.key] = true
        node.neighbors.forEach((neighbor) => explore(neighbor))
      }

      explore(startingNode)
    },
    print() {
      const result = nodes
        .map(({ key, neighbors }) => {
          return (
            key + '=> ' + neighbors.map((neighbor) => neighbor.key).join(' ')
          )
        })
        .join('\n')

      console.log(result)
    },
  }
}
function test() {
  const graph = createGraph(true)

  graph.addNode('a')
  graph.addNode('b')
  graph.addNode('c')
  graph.addNode('d')
  graph.addNode('e')
  graph.addNode('f')

  graph.addEdge('a', 'b')
  graph.addEdge('a', 'e')
  graph.addEdge('a', 'f')
  graph.addEdge('b', 'e')
  graph.addEdge('b', 'd')
  graph.addEdge('c', 'b')
  graph.addEdge('d', 'e')
  graph.addEdge('d', 'c')

  // graph.breadthSearch('a', (node) => console.log(node.key))
  graph.depthSearch('a', (node) => console.log(node.key))
}

// test()
