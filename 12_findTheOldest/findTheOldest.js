const findTheOldest = function(people) {
    const peopleAges = people.map(person => {
        if (person.yearOfDeath) {
            return {
                name: person.name,
                age: person.yearOfDeath - person.yearOfBirth,
            }
        }

        const CURRENT_YEAR = new Date().getFullYear()
        return {
            name: person.name,
            age: CURRENT_YEAR - person.yearOfBirth,
        }
    })

    return peopleAges.reduce((oldestPerson, currentPerson) => currentPerson.age > oldestPerson.age ? currentPerson : oldestPerson)
};

// Do not edit below this line
module.exports = findTheOldest;
