const palindromes = function (string) {
    let word = string.split('')

    const punctuation = ['!', ',', '.', ' ']

    word = word.filter(letter => !punctuation.includes(letter))
    word = word.join('').toLowerCase()

    let reverseWord = word.split('').reverse('').join('')

    return word === reverseWord
};

// Do not edit below this line
module.exports = palindromes;
