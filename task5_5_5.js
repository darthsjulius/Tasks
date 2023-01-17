function copySorted(arr) {
    let sortedarr = arr.slice();
    sortedarr.sort((a, b) => a.localeCompare(b));
    return sortedarr;
}