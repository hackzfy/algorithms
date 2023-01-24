export function createQueue() {
  const queue = []
  return {
    enqueue(item) {
      queue.unshift(item)
      return item
    },
    dequeue() {
      return queue.pop()
    },
    peek() {
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    },
  }
}

function test() {
  const q = createQueue()
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)

  console.log(q.peek())

  q.dequeue()

  console.log(q.peek())

  q.dequeue()

  console.log(q.peek())

  q.dequeue()

  console.log(q.peek())
  console.log(q.isEmpty())
}

// test()
