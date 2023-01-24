import { createQueue } from './queue.mjs'

function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey)
      children.push(childNode)
      return childNode
    },
  }
}

function createTree(rootKey) {
  const rootNode = createNode(rootKey)
  return {
    rootNode,
    addNode(parentKey, childKey) {
      const parentNode = this.getNode(parentKey)
      return parentNode.addChild(childKey)
    },
    getNode(nodeKey) {
      const queue = createQueue()
      queue.enqueue(rootNode)
      while (!queue.isEmpty()) {
        const current = queue.dequeue()
        if (current.key === nodeKey) {
          return current
        }
        current.children.forEach((child) => {
          queue.enqueue(child)
        })
      }
    },
    print() {
      let result = ''
      function traverse(node, visitFn, depth) {
        visitFn(node, depth)
        node.children.forEach((node) => {
          traverse(node, visitFn, depth + 1)
        })
      }
      function printResult(node, depth) {
        result += ' '.repeat(depth * 2) + node.key + '\n'
      }

      traverse(rootNode, printResult, 0)
      console.log(result)
    },
  }
}

const tree = createTree('a')

tree.addNode('a', 'b')
tree.addNode('b', 'c')
tree.addNode('b', 'd')
const a = tree.getNode('a')
const b = tree.getNode('b')
const c = tree.getNode('c')
const d = tree.getNode('d')
tree.print()
export {}
