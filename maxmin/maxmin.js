export const max1 = (arr) =>
  arr.reduce((max, item) => (max < item ? item : max), 0);

export const max2 = (arr) => Math.max(...arr);

export const min1 = (arr) =>
  arr.reduce((min, item) => (min > item ? item : min));

export const min2 = (arr) => Math.min(...arr);

export const max3 = (arr) => {
  let max = 0;
  arr.forEach((item) => (max = max < item ? item : max));
  return max;
};

export const min3 = (arr) => {
  let min = 0;
  arr.forEach((item) => (min = min > item ? item : min));
  return min;
};
