function getDateAgo(date, days) {
    let date1 = new Date(date);
    date1.setDate(date.getDate() - days);
    return date1.getDate();
}