function sumSalaries(salaries) {
    let total = Object.entries(salaries).reduce((sum, value) => sum + value, 0);
    return total;
}