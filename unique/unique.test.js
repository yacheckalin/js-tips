import { unique1, unique2, unique3 } from "./unique";

it("function unique1 returns unique values from array", () => {
  const data = [1, 2, 2, 2, 3, 3, 1];
  expect(unique1(data)).toEqual([1, 2, 3]);
});
it("function unique2 returns unique values from array", () => {
  const data = [1, 2, 2, 2, 3, 3, 1];
  expect(unique2(data)).toEqual([1, 2, 3]);
});
it("function unique3 returns unique values from array", () => {
  const data = [1, 2, 2, 2, 3, 3, 1];
  expect(unique3(data)).toEqual([1, 2, 3]);
});
