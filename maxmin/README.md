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
