function getSecondsToday() {
    let date = new Date();
    let totalSeconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds;
    return totalSeconds;
}

// OR:

function getSecondsToday1() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - today) / 1000);
}