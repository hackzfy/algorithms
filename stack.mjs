export function createStack() {
  const array = []

  return {
    push(item) {
      array.push(item)
    },
    pop() {
      return array.pop()
    },
    peek() {
      return array[array.length - 1]
    },
    get length() {
      return array.length
    },
    isEmpty() {
      return array.length === 0
    },
  }
}

function test() {
  const stack = createStack()

  stack.push(1)
  stack.push(2)
  stack.push(3)
  console.log(stack.peek())
  console.log(stack.length)

  stack.pop()
  console.log(stack.peek())
  stack.pop()
  console.log(stack.peek())
  stack.pop()
  console.log(stack.peek())

  console.log(stack.isEmpty())
}

// test()
