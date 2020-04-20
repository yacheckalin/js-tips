#### Check data type

```javascript
export const check = (obj) => {
  if (obj === null) return "data type: null";
  if (typeof obj == "function") return "data type: Function";
  if (typeof obj == "object") {
    if (obj instanceof Map) return "data type: Map";
    if (obj instanceof Set) return "data type: Set";
    if (obj instanceof Array) return "data type: Array";
    return "data type: Object";
  }
  return `data type: ${typeof obj}`;
};
```

### Function return any type of [Null|Undefined|Number|BigInt|String|Array|Object|Function|Map|Set]

```javascript
export const typeCheck = (obj) =>
  Object.prototype.toString.call(obj).match(/\[object (\w+?)\]/is)[1];
```
