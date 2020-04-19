import { max1 } from "./maxmin";

const data = [0, -1, 2, 3, -11, 33];
it("check max1 function for valid return", () => {
  expect(max1(data)).toBe(33);
});
