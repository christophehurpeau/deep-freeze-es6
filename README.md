# deep-freeze-es6 [![NPM version][npm-image]][npm-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/christophehurpeau/deep-freeze-es6.svg)](https://greenkeeper.io/)

deep freeze, works with Map and Set

## Quick example

```js
const deepFreeze = require('deep-freeze-es6');
const obj = deepFreeze({ map: new Map([[1,1], [2,2]]) });
obj.map.clear(); // Error: map is read-only
```

[npm-image]: https://img.shields.io/npm/v/deep-freeze-es6.svg?style=flat-square
[npm-url]: https://npmjs.org/package/deep-freeze-es6
