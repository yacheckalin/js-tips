import { unique1, unique2 } from "./unique";

it("function return unique1 values from array", () => {
  const data = [1, 2, 2, 2, 3, 3, 1];
  expect(unique1(data)).toEqual([1, 2, 3]);
});
it("function return unique2 values from array", () => {
  const data = [1, 2, 2, 2, 3, 3, 1];
  expect(unique2(data)).toEqual([1, 2, 3]);
});
