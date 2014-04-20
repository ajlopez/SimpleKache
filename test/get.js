
var sc = require('..');

exports['create cache'] = function (test) {
    var cache = sc.create();
    
    test.ok(cache);
    test.equal(typeof cache, 'object');
};

exports['get undefined item'] = function (test) {
    var cache = sc.create();
    
    test.strictEqual(cache.get('foo'), null);
};

