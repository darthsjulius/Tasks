function sumInput() {
    let arr = [];


    while (true) {
        let elem = prompt('Type in a numeric value');
    if (!isFinite(elem) || elem === null || elem === '') break;
    arr.push(+elem); 
    } let i;



for ( i= 0; i < arr.length; i++) {
    arr[i] += i;
} return i;
}