function addNumbersNormal(a, b, multiplyResultByTwo = false) {
    if (multiplyResultByTwo) {
        return 2 * (a + b);
    }
    return a + b;
}
console.log('Add numbers using a normal function: ' + addNumbersNormal(1, 2));

const addNumbersAnonymous = function (a, b, multiplyResultByTwo = false) {
    if (multiplyResultByTwo) {
        return 2 * (a + b);
    }
    return a + b;
};
console.log('Add numbers using an anonymous function: ' + addNumbersAnonymous(1, 2));

const addNumbersArrow = (a, b, multiplyResultByTwo) => {
    if (multiplyResultByTwo) {
        return 2 * (a + b);
    }
    return a + b;
};
console.log('Add numbers using an arrow function: ' + addNumbersArrow(1, 2, true));

function convertDayNumberToString(day) {
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}

function printDayOfBirthNormal(person = { firstName: 'Normal', lastName: 'Function', born: new Date() }) {
    console.log(`Hello ${person.firstName} ${person.lastName}. You were born on a ${convertDayNumberToString(person.born.getDay())}.`);
}
printDayOfBirthNormal();

const printDayOfBirthAnonymous = function (person = { firstName: 'Anonymous', lastName: 'Function', born: new Date() }) {
    console.log(`Hello ${person.firstName} ${person.lastName}. You were born on a ${convertDayNumberToString(person.born.getDay())}.`);
};
const myPerson = { firstName: 'Anonymous', lastName: 'Function', born: new Date(96, 9, 27) };
printDayOfBirthAnonymous(myPerson);

const printDayOfBirthArrow = (person = { firstName: 'Arrow', lastName: 'Function', born: new Date(96, 7, 4) }) => {
    console.log(`Hello ${person.firstName} ${person.lastName}. You were born on a ${convertDayNumberToString(person.born.getDay())}.`);
};
printDayOfBirthArrow();
