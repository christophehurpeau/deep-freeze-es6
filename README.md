<h3 align="center">
  deep-freeze-es6
</h3>

<p align="center">
  deep freeze, works with Map and Set
</p>

<p align="center">
  <a href="https://npmjs.org/package/deep-freeze-es6"><img src="https://img.shields.io/npm/v/deep-freeze-es6.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/deep-freeze-es6"><img src="https://img.shields.io/npm/dw/deep-freeze-es6.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/deep-freeze-es6"><img src="https://img.shields.io/node/v/deep-freeze-es6.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/deep-freeze-es6"><img src="https://img.shields.io/npm/types/deep-freeze-es6.svg?style=flat-square"></a>
  <a href="https://codecov.io/gh/christophehurpeau/deep-freeze-es6"><img src="https://img.shields.io/codecov/c/github/christophehurpeau/deep-freeze-es6/master.svg?style=flat-square"></a>
</p>

## Quick example

```js
import { deepFreeze } from 'deep-freeze-es6';

const obj = deepFreeze({
  map: new Map([
    [1, 1],
    [2, 2],
  ]),
});
obj.map.clear(); // Error: map is read-only
```
