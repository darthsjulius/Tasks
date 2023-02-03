function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumTo1(n) {
   return (n == 1) ? n : n + sumTo(n-1); 
}


function sumTo2(n) {
    return (n * (n + 1) / 2);
}