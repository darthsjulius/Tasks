// first variation, can't accept more than 1 value & work with methods
function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);
        cache.set(result, x);
        return result;
    }
}


// 2nd variation, works with methods, but still doesn't accept more than 1 value

function cachingDecorator1(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(result, x);
        return result;
    }
}


// 3rd variation, works with methods, accepts numerous arguments

function cachingDecorator2(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...args);
        cache.set(key, result);
        return result;
    }
}
// accepts 2 args
function hash(args) {
    return args[0] + ',' + args[1]; 
}

// accepts numerous args
function hash1(args) {
    return ( [].join.call(args) );
}
// почему с return функция работает, только если передать args как массив, 
// если функция должна работать и с псевдомассивами?
// а с alert все срабатывает нормально? например: 
// function hash1(args) {
//  alert( [].join.call(args) );
//}
//если вызвать hash1(1, 2) - сработает, а с return - нет?
//hash1(1, 2) - args is not defined*/