
var sc = require('..');

exports['set and get item'] = function (test) {
    var cache = sc.create();
    
    cache.set('foo', 'bar');
    
    test.equal(cache.get('foo'), 'bar');
};

exports['set and get expired and non-expired items'] = function (test) {
    test.async();
    
    var cache = sc.create();
    
    cache.set('foo', 'bar', { lifetime: 500 });
    cache.set('one', 1, { lifetime: 2000 });
    
    setTimeout(function () {
        test.equal(cache.get('foo'), null);
        test.equal(cache.get('one'), 1);
        test.done();
    }, 1000);
};

exports['get renewed item'] = function (test) {
    test.async();
    
    var cache = sc.create();
    
    cache.set('foo', 'bar', { lifetime: 300 });
    
    setTimeout(function () {
        test.equal(cache.get('foo'), 'bar');
    }, 200);
    
    setTimeout(function () {
        test.equal(cache.get('foo'), 'bar');
    }, 400);
    
    setTimeout(function () {
        test.equal(cache.get('foo'), null);
        test.done();
    }, 1000);
};
