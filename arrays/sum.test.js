import { sum1 } from "./sum";

it("check the summ of al elements in array [1,2,3,4,5]", () => {
  const data = [1, 2, 3, 4, 5];
  expect(sum1(data)).toBe(15);
});
