export const getAllNegativeElements = (arr) => arr.filter((item) => item < 0);

export const findSecondLargestElement = (arr) => {
  let max1 = arr[0],
    max2 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max1 < arr[i]) {
      max1 = arr[i];
    } else if (max2 < arr[i] && max1 > arr[i]) {
      max2 = arr[i];
    }
  }
  return max2;
};

export const countTotalOddAndEven = (arr) => {
  let odd = 0;
  let even = 0;
  for (const item of arr) {
    if (!(item % 2)) {
      even += item;
    } else {
      odd += item;
    }
  }
  return { odd, even };
};

export const countTotalNumberOfNegativeElements = (arr) =>
  arr.filter((item) => item < 0).reduce((sum, item) => sum + item);

export const countFrequenceOfEachElement = (arr) => {
  let checkMap = new Map();
  for (const item of arr) {
    if (!checkMap.has(item)) {
      checkMap.set(item, 1);
    } else {
      checkMap.set(item, checkMap.get(item) + 1);
    }
  }
  return checkMap;
};
