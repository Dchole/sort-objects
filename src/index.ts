import { errorHandler, traverse } from "./utils"

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

    errorHandler(
      ["string", "number", "bigint", "boolean"],
      typeof prev,
      typeof curr
    )

    if (ascending) return prev > curr ? 1 : -1
    return prev > curr ? -1 : 1
  })

  return sortedArray
}
