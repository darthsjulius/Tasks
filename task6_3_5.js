function inBetween(a, b) {
    return function(x) {
        return a <= x && x <= b;
    };
}


function inArray(arr) {
    return function(x) {
        for (let item of arr) {
            if (item == x) return x;
        };
    };
}

//OR 

function inArray1(arr) {
    return function(x) {
        return arr.includes(x);
    };
}