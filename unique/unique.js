export const unique1 = (arr) => [...new Set(arr)];

export const unique2 = (arr) => {
  let unique = [];
  arr.forEach((item, index) => {
    if (!unique.includes(item)) unique.push(item);
  });
  return unique;
};
