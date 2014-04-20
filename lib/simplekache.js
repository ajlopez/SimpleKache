
function Cache() {
    var values = { };
    
    this.get = function (key) {
        if (values.hasOwnProperty(key)) {
            values[key].count++;
            return values[key].value;
        }
            
        return null;
    }
    
    this.set = function (key, value, options) {        options = options || { };        
        var item = { value: value, count: 0 };
        
        if (options.lifetime)
            setTimeout(maketimer(key, options.lifetime), options.lifetime);
        
        values[key] = item;
    }
    
    function maketimer(key, lifetime) {
        var fn = function () {
            if (values[key] != null && values[key].count == 0) {
                delete values[key];
                return;
            }
            
            values[key].count = 0;
            
            setTimeout(fn, lifetime);
        }
        
        return fn;
    }
}

function create() {
    return new Cache();
}

module.exports = {
    create: create
}