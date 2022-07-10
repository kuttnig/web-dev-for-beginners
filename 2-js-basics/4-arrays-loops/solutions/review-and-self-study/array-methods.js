const MAX = 10;

function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

// define and fill array with random integer values
let firstArray = [];
for (let i = 0; i < MAX; i++) {
    firstArray.push(getRandomInteger(MAX));
}
console.log(`Initial array: ${firstArray}`);

const n = getRandomInteger(MAX) + 1;
console.log(`n = ${n}.`);

// push some values (add value to the end of the array)
for (let i = 0; i < n; i++) {
    firstArray.push(getRandomInteger(MAX));
}
console.log(`firstArray after push-operations ${firstArray}`);

// unshift some values (add value to the beginning of the array)
for (let i = 0; i < n; i++) {
    firstArray.unshift(getRandomInteger(MAX));
}
console.log(`firstArray after unshift-operations ${firstArray}`);

// copy n-elements from the first array (starting from index 'firstArray.length / 2) to a new array
let secondArray = firstArray.slice(firstArray.length / 2);
console.log(`Initial secondArray: ${secondArray}`);

// pop an item from the second array (remove last item)
secondArray.pop();
console.log(`secondArray after pop-operation ${secondArray}`);

// shift an item from the second array (remove first item)
secondArray.shift();
console.log(`secondArray after shift-operation ${secondArray}`);

// replace the the first n-element of the firstArray with the contents of the secondArray
firstArray.splice(0, secondArray.length, ...secondArray);
console.log(`firstArray after splice-operation ${firstArray}`);

// create a third array which only contains even numbers from the first array
let thirdArray = firstArray.filter(elem => elem % 2 === 0);
console.log(`Initial thirdArray: ${thirdArray}`);

// add the third array to the end of the second array
secondArray.splice(secondArray.length, 0, ...thirdArray);
console.log(`secondArray after splice-operation ${secondArray}`);

// add the second array to the beginning of the first array
firstArray.splice(0, 0, ...secondArray);
console.log(`firstArray after the splice-operation ${firstArray}`);

// sort the first array in descending order
firstArray.sort((a, b) => a > b ? -1 : 1);
console.log(`firstArray after sort-operation ${firstArray}`);
