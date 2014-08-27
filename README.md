dep-order
=

Installation
==

`npm install dep-order`

Usage
==

```js
var depOrder = require('dep-order');
var str = 'a&e&f   b&c d&g';
depOrder.parse(str).should.eql([['a', 'e', 'f'], ['b', 'c'], ['d', 'g']]);
```


use `&` to mark parallel, use ` `(space) to mark sequence.
