import { array, logArray } from './utils.mjs'

export function insertionSort(array) {
  let i
  let j

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      logArray(array)
      console.log(i, array[i])
      if (array[i] < array[j]) {
        const tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
      }
    }
  }

  return array
}

function test() {
  insertionSort([10, 5, 2, 3, 8, 6, 7, 9, 1, 4])
}

test()
