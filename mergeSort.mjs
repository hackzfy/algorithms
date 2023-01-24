import { array, logArray } from './utils.mjs'

export function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const sorted = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  const result = [...sorted, ...left, ...right]
  logArray(result)
  return result
}

function test() {
  console.log(array)
  mergeSort(array)
}

test()
