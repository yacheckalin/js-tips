import { sum1, sum2, sum3, sum4 } from "./sum";

const data = [1, 2, 3, 4, 5];
it("check the sum1 with [1,2,3,4,5]", () => {
  expect(sum1(data)).toBe(15);
});

it("check the sum2 with [1,2,3,4,5]", () => {
  expect(sum2(data)).toBe(15);
});

it("check the sum3 with [1,2,3,4,5]", () => {
  expect(sum3(data)).toBe(15);
});

it("check the sum4 with [1,2,3,4,5]", () => {
  expect(sum4(data)).toBe(15);
});
