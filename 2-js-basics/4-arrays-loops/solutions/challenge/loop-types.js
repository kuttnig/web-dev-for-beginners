const MAX = 1000;

function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

// create and fill array with random integers
let myArray = [];
for (let i = 0; i < MAX; i++) {
    myArray.push(getRandomInteger(MAX));
}

console.log('-- for-loop --');
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('-- while-loop --');
let whileCounter = 0;
while (whileCounter < myArray.length) {
    console.log(myArray[whileCounter]);
    whileCounter++;
}

// here we do an additional if check to avoid out of bound
console.log('-- do-while-loop --');
let doWhileCounter = 0;
if (doWhileCounter < myArray.length) {
    do {
        console.log(myArray[doWhileCounter]);
        doWhileCounter++;
    } while (doWhileCounter < myArray.length);
}

console.log('-- for...of-loop --');
for (const elem of myArray) {
    console.log(elem);
}

console.log('-- forEach-loop --');
myArray.forEach(elem => console.log(elem));

// map shouldn't be used to print the contents of an existing array if the copy of the array (return value of map) is never used!
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
