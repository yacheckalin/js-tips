export const max1 = (arr) =>
  arr.reduce((max, item) => (max < item ? item : max), 0);
