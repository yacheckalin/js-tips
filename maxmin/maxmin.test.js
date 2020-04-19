import { max1, min1, max2, min2 } from "./maxmin";

const data = [0, -1, 2, 3, -11, 33];
it("check max1 function for valid return", () => {
  expect(max1(data)).toBe(33);
});

it("check max2 function for valid return", () => {
  expect(max2(data)).toBe(33);
});

it("check min1 function for valid return", () => {
  expect(min1(data)).toBe(-11);
});
it("check min2 function for valid return", () => {
  expect(min2(data)).toBe(-11);
});
