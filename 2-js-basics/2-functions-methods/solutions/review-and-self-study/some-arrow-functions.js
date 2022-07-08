const max = 10;

function greetPerson(name, greetingMsg = 'Hi') {
    const msg = `${greetingMsg}, ${name}.`;
    return msg;
}
console.log(greetPerson('Normal'));

function factorial(n) {
    let product = 1;
    for (let i = (product + 1); i <= n; i++) {
        product *= i;
    }
    return product;
}
for (let i = 0; i < max; i++) {
    console.log(factorial(i));
}

const greetPersonArrow = (name, greetingMsg = 'Hi') => {
    const msg = `${greetingMsg}, ${name}.`;
    return msg;
};
console.log(greetPersonArrow('Arrow'));

let factorialArrow = n => {
    let product = 1;
    for (let i = (product + 1); i <= n; i++) {
        product *= i;
    }
    return product;
}
for (let i = 0; i < max; i++) {
    console.log(factorialArrow(i));
}

const goodbyeArrowFunction = () => console.log('Goodbye.');
for (let i = 0; i < max; i++) {
    goodbyeArrowFunction();
}
const goodbyeNameArrowFunction = name => console.log(`Goodbye, ${name}.`);
for (let i = 0; i < max; i++) {
    goodbyeNameArrowFunction('Kevin');
}