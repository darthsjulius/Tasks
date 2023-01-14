function readNumber() {
    let num;
    do {
        num = prompt('Type in a numeric value');
    } while (typeof num == 'number'); // учебник предлагает условие цикла ( !isFinite(num) )
    if (num == null || num == '')  {
        return null;
    } 
        else return +num;
    }

    alert( `Number: + ${readNumber()}` ); /* обертка здесь для того, чтобы получить 
    именно результат ф-ции, а не ее код? */