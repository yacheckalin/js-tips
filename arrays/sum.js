export const sum1 = (arr) => arr.reduce((sum, item) => sum + item, 0);

export const sum2 = arr => {
  let result = 0;
  arr.forEach(item => result += item);
  return result;
}