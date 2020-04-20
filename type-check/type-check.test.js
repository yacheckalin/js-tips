import { check } from "./type-check";

it("check function return null", () => {
  expect(check(null)).toBe("data type: null");
});
it("check function return undefined", () => {
  expect(check(undefined)).toBe("data type: undefined");
});
it("check function return Number", () => {
  expect(check(123)).toBe("data type: number");
});
it("check function return String", () => {
  expect(check("")).toBe("data type: string");
});
it("check function return Function", () => {
  expect(check(() => {})).toBe("data type: Function");
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
