**Function definintion**

Calculate the sum of elements in an array.

**Input Format**

arr - array of Int/BigInt elements

**Output Format**

return the integer sum of the elements in the array

```javascript
export const sum1 = (arr) => arr.reduce((sum, item) => sum + item, 0);
```

```javascript
export const sum2 = (arr) => {
  let result = 0;
  arr.forEach((item) => (result += item));
  return result;
};
```
