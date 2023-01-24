import { array, logArray } from './utils.mjs'

function quickSort(array) {
  logArray(array)
  if (array.length < 2) {
    return array
  }
  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

const result = quickSort(array)
console.log(result)
