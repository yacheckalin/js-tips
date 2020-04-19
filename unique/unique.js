export const unique1 = (arr) => [...new Set(arr)];

export const unique2 = (arr) => {
  let unique = [];
  arr.forEach((item, index) => {
    if (!unique.includes(item)) unique.push(item);
  });
  return unique;
};

export const unique3 = (arr) => {
  let result = new Map();
  for (const item of arr) {
    if (!result.has(item)) {
      result.set(item, item);
    }
  }
  return Array.from(result.values());
};
