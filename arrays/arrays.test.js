import {
  getAllNegativeElements,
  findSecondLargestElement,
  countTotalOddAndEven,
  countTotalNumberOfNegativeElements,
} from "./arrays";

const data = [-1, 2, 3, 4, -6, -4, 0, 2];
it("check getAllNegativeElements for valid return", () => {
  expect(getAllNegativeElements(data)).toEqual([-1, -6, -4]);
});

it("check findSecondLargestElement for valid return", () => {
  const input = [1, 2, 3, 44, 30];

  expect(findSecondLargestElement(input)).toBe(30);
});

it("check countTotalOddAndEven", () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 2];
  expect(countTotalOddAndEven(input)).toEqual({ even: 14, odd: 16 });
});

it("check countTotalNumberOfNegativeElements", () => {
  const input = [-1, -2, -3, 0, 2, 3, 4, 22];

  expect(countTotalNumberOfNegativeElements(input)).toBe(-6);
});
