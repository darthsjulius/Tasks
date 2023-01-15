function checkSpam(str) {
    lowStr = str.toLowerCase(); /* обязательно ли создавать переменную с методом,
    нельзя ли просто применить метод к строке? нап.: str.toLowerCase()
    вместо lowStr = str.toLowerCase()? */
    if (lowStr.includes('viagra') || lowStr.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}

