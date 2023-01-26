function getLocalDay(date) {
    let europeanDays = [7, 1, 2, 3, 4, 5, 6];
    return europeanDays[date.getDay()];
}

let date = new Date(2023, 0, 26);
alert( getLocalDay(date) );