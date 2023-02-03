function fib(n) {
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a +  b;
        a = b;
        b = c;
    }
    return b;
}