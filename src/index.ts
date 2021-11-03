import { traverse } from "./utils"

export const sort = <TObjectArray extends Record<string, unknown>>(
  objectArray: TObjectArray[],
  key: keyof TObjectArray,
  ascending = true
): TObjectArray[] => {
  const field = key as string

  // Copying array to avoid manipulating original array
  const arrayCopy = [...objectArray]

  const sortedArray = arrayCopy.sort((a, b) => {
    const [prev, curr] = [traverse(a, field), traverse(b, field)]

    const valueA = typeof prev === "string" ? prev.toLowerCase() : prev
    const valueB = typeof curr === "string" ? curr.toLowerCase() : curr

    if (ascending) return valueA > valueB ? 1 : -1
    return valueA > valueB ? -1 : 1
  })

  return sortedArray
}
