import { classWithModifiers, createQuery, minFill } from "./common"

describe("Common utils", () => {
  test("minFill", () => {
    expect(minFill([])).toStrictEqual([])
    expect(minFill([], 0)).toStrictEqual([])
    expect(minFill([], 5)).toStrictEqual([])
    expect(minFill([1, 2, 3])).toStrictEqual([1, 2, 3])

    expect(minFill([1, 2], 5)).toStrictEqual([1, 2, 1, 2, 1])

    expect(minFill([[1, 2], [3, 4]], 5)).toStrictEqual([[1, 2], [3, 4], [1, 2], [3, 4], [1, 2]])
  })

  test("classWithModifiers", () => {
    expect(classWithModifiers("origin-class", "modifier")).toBe("origin-class origin-class--modifier")
    expect(classWithModifiers("origin-class", true && "modifier")).toBe("origin-class origin-class--modifier")
    expect(classWithModifiers("origin-class", false && "modifier")).toBe("origin-class")
  })

  test("createQuery", () => {
    expect(createQuery({ far: "<>asdop12md!)I@JDM(", boo: 123, baz: { a: 1, b: "asd1", c: "z98012ny9hM*@DGN&! ! *<>", d: [1, 2, [3, 4]] } })).toBe(`far=%3C%3Easdop12md!)I%40JDM(&boo=123&a=1&b=asd1&c=z98012ny9hM*%40DGN%26!%20!%20*%3C%3E&d=1%2C2%2C3%2C4`)
  })
})

