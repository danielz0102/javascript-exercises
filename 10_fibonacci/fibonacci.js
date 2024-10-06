const fibonacci = function(arg) {
    const member = typeof arg !== 'number' ? parseInt(arg) : arg

    if (member === 0) return 0
    if (member < 0) return 'OOPS'

    const fibonacci = [1, 1]
    for (let i = 2; i <= member; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }

    return fibonacci[member - 1]
};

// Do not edit below this line
module.exports = fibonacci;
