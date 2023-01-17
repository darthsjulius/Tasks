function filterRange(arr, a, b) {
    let result = arr.filter(item => (item >= a && item <= b));
    return result; 
}
// можно ли здесь воспользоваться методом map?
