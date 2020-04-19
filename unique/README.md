**Function definition**

Find unique element of the array

**Input Format**

arr - array of integers

**Output Format**

Return the array of unique elements

```javascript
export const unique1 = (arr) => [...new Set(arr)];
```

```javascript
export const unique2 = (arr) => {
  let unique = [];
  arr.forEach((item, index) => {
    if (!unique.includes(item)) unique.push(item);
  });
  return unique;
};
```

```javascript
export const unique3 = (arr) => {
  let result = new Map();
  for (const item of arr) {
    if (!result.has(item)) {
      result.set(item, item);
    }
  }
  return Array.from(result.values());
};
```
