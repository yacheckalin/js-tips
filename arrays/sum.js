export const sum1 = (arr) => arr.reduce((sum, item) => sum + item, 0);

export const sum2 = (arr) => {
  let result = 0;
  arr.forEach((item) => (result += item));
  return result;
};

export const sum3 = (arr) => {
  let sum = 0;
  for (let i = -1; arr.length - 1 > i++; ) {
    sum += arr[i];
  }
  return sum;
};
