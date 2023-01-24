function createBinaryNode(nodeKey) {
  return {
    key: nodeKey,
    left: null,
    right: null,
    addLeft(leftKey) {
      const leftNode = createBinaryNode(leftKey)
      this.left = leftNode
      return leftNode
    },
    addRight(rightKey) {
      const rightNode = createBinaryNode(rightKey)
      this.right = rightNode
      return rightNode
    },
  }
}
const TRAVERSE = {
  IN_ORDER(node, visitFn) {
    if (node != null) {
      TRAVERSE.IN_ORDER(node.left, visitFn)
      visitFn(node)
      TRAVERSE.IN_ORDER(node.right, visitFn)
    }
  },
  PRE_ORDER(node, visitFn) {
    if (node != null) {
      visitFn(node)
      TRAVERSE.PRE_ORDER(node.left, visitFn)
      TRAVERSE.PRE_ORDER(node.right, visitFn)
    }
  },
  POST_ORDER(node, visitFn) {
    if (node != null) {
      TRAVERSE.POST_ORDER(node.left, visitFn)
      TRAVERSE.POST_ORDER(node.right, visitFn)
      visitFn(node)
    }
  },
}

function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey)
  return {
    root,
    print(order = 'IN_ORDER') {
      let result = ''
      function visitFn(node) {
        result += result.length === 0 ? node.key : `=>${node.key}`
      }
      TRAVERSE[order](root, visitFn)
      console.log(result)
    },
  }
}

function test() {
  const bTree = createBinaryTree('a')

  const root = bTree.root
  const b = root.addLeft('b')
  const c = root.addRight('c')
  const d = b.addLeft('d')
  const e = b.addRight('e')
  const h = d.addLeft('h')
  const i = d.addRight('i')
  const f = c.addLeft('f')
  const g = c.addRight('g')

  bTree.print('POST_ORDER')
}

// test()

export {}
