export function logArray(array) {
  console.log(array.join(' '))
}

export function copy(obj) {
  const copied = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach((propName) => {
    const desc = Object.getOwnPropertyDescriptor(obj, propName)
    Object.defineProperty(copied, propName, desc)
  })

  return copied
}

export const array = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]
