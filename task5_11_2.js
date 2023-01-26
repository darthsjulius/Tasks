function getWeekDay(date) {
    switch(date.getDay()) {
        case 0: return "ВС";
        break;
        case 1: return "ПН";
        break;
        case 2: return "ВТ";
        break;
        case 3: return "СР";
        break;
        case 4: return "ЧТ";
        break;
        case 5: return "ПТ";
        break;
        case 6: return "СБ";
        break;
    }
}

let date = new Date(2023, 0, 26);
alert(getWeekDay(date));

// OR:

function getWeekDay1(date) {
    let days = ["ВС", "ПТ", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return days[date.getDay()];
}