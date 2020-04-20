import { check, typeCheck } from "./type-check";

it("check function return null", () => {
  expect(check(null)).toBe("data type: null");
});
it("check function return undefined", () => {
  expect(check(undefined)).toBe("data type: undefined");
});
it("check function return Number", () => {
  expect(check(123)).toBe("data type: number");
});
it("check function return Number", () => {
  expect(check(123n)).toBe("data type: bigint");
});
it("check function return String", () => {
  expect(check("")).toBe("data type: string");
});
it("check function return Function", () => {
  expect(check(() => {})).toBe("data type: Function");
});
it("check function return Function", () => {
  expect(check(new Function())).toBe("data type: Function");
});
it("check function return Array", () => {
  expect(check([])).toBe("data type: Array");
});
it("check function return Map", () => {
  expect(check(new Map())).toBe("data type: Map");
});
it("check function return Set", () => {
  expect(check(new Set())).toBe("data type: Set");
});
it("check function return Object", () => {
  expect(check({})).toBe("data type: Object");
});
describe("test typeCheck function", () => {
  it("typeCheck function return null", () => {
    expect(typeCheck(null)).toBe("Null");
  });
  it("typeCheck function return undefined", () => {
    expect(typeCheck(undefined)).toBe("Undefined");
  });
  it("typeCheck function return Number", () => {
    expect(typeCheck(123)).toBe("Number");
  });
  it("typeCheck function return BigInt", () => {
    expect(typeCheck(123n)).toBe("BigInt");
  });
  it("typeCheck function return String", () => {
    expect(typeCheck("")).toBe("String");
  });
  it("typeCheck function return Function", () => {
    expect(typeCheck(() => {})).toBe("Function");
  });
  it("typeCheck function return Function", () => {
    expect(typeCheck(new Function())).toBe("Function");
  });
  it("typeCheck function return Array", () => {
    expect(typeCheck([])).toBe("Array");
  });
  it("typeCheck function return Map", () => {
    expect(typeCheck(new Map())).toBe("Map");
  });
  it("typeCheck function return Set", () => {
    expect(typeCheck(new Set())).toBe("Set");
  });
  it("typeCheck function return Object", () => {
    expect(typeCheck({})).toBe("Object");
  });
});
