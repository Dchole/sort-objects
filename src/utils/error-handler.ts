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

    const valueTypes = typeofValueA === typeofValueB ? typeofValueA : ""

    throw new TypeError(
      `Can't sort with ${valueTypes}. Only ${expectedTypesInSentence} are accepted`
    )
  }
}
