**Function definition**

Calculate max/min/average of the array

**Input Format**

arr - array of integers

**Output Format**

Return the integer of max/min/average(float)

```javascript
export const max1 = (arr) =>
  arr.reduce((max, item) => (max < item ? item : max), 0);
```

```javascript
export const max2 = (arr) => Math.max(...arr);
```

```javascript
export const max3 = (arr) => {
  let max = 0;
  arr.forEach((item) => (max = max < item ? item : max));
  return max;
};
```

```javascript
export const min1 = (arr) =>
  arr.reduce((min, item) => (min > item ? item : min));
```

```javascript
export const min2 = (arr) => Math.min(...arr);
```

```javascript
export const min3 = (arr) => {
  let min = 0;
  arr.forEach((item) => (min = min > item ? item : min));
  return min;
};
```

```javascript
export const avg = (arr) =>
  arr.reduce((sum, item) => sum + item, 0) / arr.length;
```
