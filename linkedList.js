function createNode(value) {
  return {
    value,
    next: null,
    previous: null,
  }
}

function createLinkedList() {
  return {
    tail: null,
    head: null,
    length: 0,

    push(value) {
      const node = createNode(value)
      if (this.head === null) {
        this.head = node
        this.tail = node
        this.length++
        return node
      }

      this.tail.next = node
      node.previous = this.tail
      this.tail = node
      this.length++
      return node
    },
    pop() {
      if (this.isEmpty()) {
        return null
      }
      const tail = this.tail
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
        this.length--
        return tail
      }

      const previous = tail.previous
      previous.next = null
      this.tail = previous
      this.length--
      return tail
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null
      }
      if (index === 0) {
        return this.head
      }
      if (index === this.length - 1) {
        return this.tail
      }
      let current = this.head
      let i = 0
      while (i < index) {
        current = current.next
        i++
      }
      return current
    },
    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null
      }
      if (this.head === this.tail) {
        const head = this.head
        this.head = null
        this.tail = null
        this.length--
        return head
      }

      if (index === 0) {
        const head = this.head
        this.head = head.next
        this.head.previous = null
        this.length--
        return head
      }

      if (index === this.length - 1) {
        const tail = this.tail
        this.tail = tail.previous
        this.tail.next = null
        return tail
      }

      let current = this.head
      let i = 0
      while (i < index) {
        current = current.next
        i++
      }
      const prev = current.previous
      const next = current.next
      prev.next = next
      next.prev = prev
      this.length--
      return current
    },
    isEmpty() {
      return this.length === 0
    },
    print() {
      const values = []
      let current = this.head
      while (current) {
        values.push(current.value)
        current = current.next
      }
      console.log(values.join(' <=> '))
    },
  }
}

function test() {
  const linkedList = createLinkedList()
  linkedList.push(0)
  linkedList.push(1)
  linkedList.push(2)
  linkedList.push(3)
  linkedList.push(4)

  linkedList.print()

  const node = linkedList.get(3)
  linkedList.delete(0)
  linkedList.delete(3)
  linkedList.delete(1)
  linkedList.print()
}

// test()
