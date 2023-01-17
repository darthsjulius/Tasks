function getAverageAge(users) {
    let accumulate_ages = users.reduce(((sum, item) => 
    sum + item.age, 0) / users.length); 
}