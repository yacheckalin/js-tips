#### Print all negative elements in array

```javascript
export const getAllNegativeElements = (arr) => arr.filter((item) => item < 0);
```

#### Find second largest number in array

```javascript
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
```

#### Count even and odd elements in array

```javascript
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
```
