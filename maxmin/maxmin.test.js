import { max1, min1, max2, min2, max3, min3, avg, avg2 } from "./maxmin";

const data = [0, -1, 2, 3, -11, 33];
it("check max1 function for valid return", () => {
  expect(max1(data)).toBe(33);
});

it("check max2 function for valid return", () => {
  expect(max2(data)).toBe(33);
});
it("check max3 function for valid return", () => {
  expect(max3(data)).toBe(33);
});

it("check min1 function for valid return", () => {
  expect(min1(data)).toBe(-11);
});
it("check min2 function for valid return", () => {
  expect(min2(data)).toBe(-11);
});
it("check min3 function for valid return", () => {
  expect(min3(data)).toBe(-11);
});

it("check avg function for valid return", () => {
  const data = [1, 2, 3, 4, 5];
  expect(avg(data)).toBe(3);
});
it("check avg2 function for valid return", () => {
  const data = [1, 2, 3, 4, 5];
  expect(avg(data)).toBe(3);
});
