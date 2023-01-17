function reverseInRange(arr) {

    function compare(a, b) {
        if (a > b) {
            return 1;
        } else if (a == b) {
            return 0;
        } else {
            return -1;
        }
    } 

    arr.sort(compare);
    arr.reverse();
}

/* решение из учебника:
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); */