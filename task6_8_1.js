function printNumbers(from, to) {
    let currentNumber = from;
    let timerId = setInterval(function() {
        alert(currentNumber); 
            if (currentNumber == to) {
                clearInterval(timerId);
            }
            currentNumber++;
    }, 1000);
}



function printNumbersRecursive(from, to) {
    let current = 0;
    let timerId = setTimeout(function(){
        alert(current);
        if (current < to) {
            setTimeout(go, 1000); 
        }
        current++;
        setTimeout()
    }, 1000);
}