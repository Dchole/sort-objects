import { sort } from "../index"

const example = [
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
]

test("Sort by name in ascending order", () => {
  expect(sort(example, "name")).toEqual([
    {
      id: 1,
      name: "first"
    },
    {
      id: 4,
      name: "fourth"
    },
    {
      id: 2,
      name: "second"
    },
    {
      id: 3,
      name: "third"
    }
  ])
})

test("Sort by name in descending order", () => {
  expect(sort(example, "name", false)).toEqual([
    {
      id: 3,
      name: "third"
    },
    {
      id: 2,
      name: "second"
    },
    {
      id: 4,
      name: "fourth"
    },
    {
      id: 1,
      name: "first"
    }
  ])
})

test("Sort with a number type", () => {
  expect(sort(example, "id")).toEqual([
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
  ])
})

test("Sort with a nested object", () => {
  const newExample = example.map(object => {
    const objectWithMore: typeof object & { more: { id: number } } = {
      ...object,
      more: {
        id: object.id
      }
    }

    return objectWithMore
  })

  expect(() => sort(newExample, "more")).toThrow(TypeError)
})
