import { errorHandler, traverse } from "./utils"

export const sort = <TObjectArray extends Record<string, unknown>>(
  objectArray: TObjectArray[],
  key: keyof TObjectArray,
  ascending?: boolean
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

    console.log(prev, curr)

    if (ascending) return prev > curr ? 1 : -1
    return prev > curr ? -1 : 1
  })

  return sortedArray
}

const a = sort(
  [
    {
      id: 1,
      name: "first"
    },
    {
      id: 2,
      name: "second"
    },
    {
      id: 3,
      name: "third"
    },
    {
      id: 4,
      name: "fourth"
    }
  ],
  "name"
)

console.log(a)
