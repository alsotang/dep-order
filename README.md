dep-order
=

**Demand yet to understand, suspend development.**

Installation
==

`npm install dep-order`

Usage
==

```js
var depOrder = require('dep-order');
var str = 'a & (b | c)';
var obj = depOrder.parse(str);
```

Examples
==

`a & (b | c)` means:

1. execute `a`
2. execute `b` and `c` parallelly

`(a & c | b) & d` means:

1. excute `a` and `b` parallelly
2. when `a` is done, execute `c` immediately
3. when `a`, `b`, `c` is all done, execute d
