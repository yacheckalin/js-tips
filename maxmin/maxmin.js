export const max1 = (arr) =>
  arr.reduce((max, item) => (max < item ? item : max), 0);

export const max2 = (arr) => Math.max(...arr);

export const min1 = (arr) =>
  arr.reduce((min, item) => (min > item ? item : min));

export const min2 = (arr) => Math.min(...arr);
