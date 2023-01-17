function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        elem = arr[i];

        if (elem < a || elem > b) {
            arr.splice(i, 1);
            i--; // не совсем понимаю, зачем этот шаг, если условие прописано в цикле
        }
    }

}