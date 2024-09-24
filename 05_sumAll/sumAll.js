const sumAll = function(start, end) {
    const difference = end - start
    let numbers = [start]
    let result = 0

    for (let i = 1; i < difference; i++) {
        numbers.push(start + i)
    }

    numbers.push(end)

    numbers.forEach(n => {
        result += n
    })

    return result
};

// Do not edit below this line
module.exports = sumAll;
