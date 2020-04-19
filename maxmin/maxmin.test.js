import { max1, min1 } from "./maxmin";

const data = [0, -1, 2, 3, -11, 33];
it("check max1 function for valid return", () => {
  expect(max1(data)).toBe(33);
});

it("check min1 function for valid return", () => {
  expect(min1(data)).toBe(-11);
});
