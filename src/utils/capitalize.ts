export const capitalize = (text: string): string =>
  text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ")
