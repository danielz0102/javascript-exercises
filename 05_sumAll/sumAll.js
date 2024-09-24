const sumAll = function(start, end) {
    if (start < 0 || end < 0
        || start % 1 !== 0
        || end % 1 !== 0
        || start !== Number(start)
        || end !== Number(end)
    ) return 'ERROR'

    const difference = Math.abs(end - start)
    let result = 0
    let numbers = []

    start < end ? numbers[0] = start : numbers[0] = end

    for (let i = 1; i < difference; i++) {
        numbers.push(numbers[0] + i)
    }

    numbers.includes(end) ? numbers.push(start) : numbers.push(end)

    numbers.forEach(n => {
        result += n
    })

    return result
};

// Do not edit below this line
module.exports = sumAll;
