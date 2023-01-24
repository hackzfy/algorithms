import { array, logArray } from './utils.mjs'

export function binarySearch(array, item) {
  const sorted = array.slice().sort((a, b) => a - b)
  logArray(sorted)

  let low = 0
  let high = sorted.length - 1
  let count = 0
  while (low <= high) {
    count++
    const mid = Math.floor((high - low) / 2)
    const guess = sorted[mid]
    console.log('guess', guess)
    if (guess === item) {
      console.log(count)
      return true
    }
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  console.log(count)
}

binarySearch(array, 1)
