function sum(a) {
    let counter = a;
    return function f(b) {
        counter += b;
    }

    f.toString = function() {
        return counter;
    }

    return f;
}