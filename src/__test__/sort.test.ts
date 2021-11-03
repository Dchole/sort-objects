import { sort } from "../index"

const example = [
  {
    id: 1,
    name: null
  },
  {
    id: 2,
    name: "first"
  },
  {
    id: 3,
    name: "second"
  },
  {
    id: 4,
    name: "second"
  },
  {
    id: 5,
    name: "Third"
  },
  {
    id: 6,
    name: "Fourth"
  },
  {
    id: 7,
    name: null
  },
  {
    id: 8
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
      name: "Fourth"
    },
    {
      id: 2,
      name: "second"
    },
    {
      id: 3,
      name: "Third"
    }
  ])
})

test("Sort by name in descending order", () => {
  expect(sort(example, "name", false)).toEqual([
    {
      id: 3,
      name: "Third"
    },
    {
      id: 2,
      name: "second"
    },
    {
      id: 4,
      name: "Fourth"
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
      name: "Third"
    },
    {
      id: 4,
      name: "Fourth"
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
