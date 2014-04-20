# SimpleKache

Simple library to chain and run functions with asynchronous calls.

## Installation

Via npm on Node:

```
npm install simplekache
```

## Usage

Reference in your program:
```js
var sk = require('simplekache');
```

Create cache:
```js
var cache = sk.create();
```

Get undefined item:
```js
var item = sk.get('foo'); // null
```

Set and get item:
```js
sk.set('one', 1);
var item = sk.get('one'); // 1
```

Set item with lifetime in microseconds:
```js
sk.set('one', 1, { lifetime: 1000 });
```
If the item is not queried in one second, the value is removed from cache.
If the item is queried in the past second, then the lifetime is extended ONE second more, not since the query time, but
since the expiration check time.


## Samples

TBD

## Versions

TBD

## License

MIT

## References
## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleKache) and submit
[pull requests](https://github.com/ajlopez/SimpleKache/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

