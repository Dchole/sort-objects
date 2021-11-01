export const errorHandler = (
  expectedTypes: string[],
  typeofValueA: string,
  typeofValueB: string
) => {
  if (
    !expectedTypes.includes(typeofValueA) ||
    !expectedTypes.includes(typeofValueB)
  ) {
    const expectedTypesCopy = [...expectedTypes]

    const lastType = expectedTypesCopy.pop()
    const expectedTypesInSentence =
      expectedTypesCopy.join(", ") + ` and ${lastType}`

    throw new TypeError(
      `Expected ${expectedTypesInSentence}. But got ${typeofValueA} and ${typeofValueB}\n instead.`
    )
  }
}
