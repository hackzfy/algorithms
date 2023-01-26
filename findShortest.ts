function solution(array: number[]) {
  const arrayToSet = new Set(array)
  const resultArr = []
  for (let i = 0; i < array.length; i++) {
    const result = sas(array.slice(i), arrayToSet.size)
    if (result !== undefined) {
      resultArr.push(result)
    }
  }
  return resultArr.sort((a, b) => a - b)[0]
}
function sas(array: number[], arrayToSetSize: number) {
  const set = new Set()
  for (let i = 0; i < array.length; i++) {
    set.add(array[i])
    if (set.size === arrayToSetSize) {
      // i is index, we need length
      return i + 1
    }
  }
}

function test(num: number, array: number[]) {
  const result = solution(array)
  console.log(num, result)
}

test(1, [7, 3, 7, 3, 1, 3, 4, 1])
test(2, [1, 1, 1, 1, 1])
test(3, [2, 1, 1, 3, 2, 1, 1, 3])
test(4, [1, 1, 2, 2, 3, 3, 4, 4, 3, 2, 1])
test(5, [1, 5, 2, 2, 3, 3, 4, 4, 3, 2, 6, 1])
test(6, [1, 8, 1, 2, 7, 3, 3, 3, 3, 3, 4])
