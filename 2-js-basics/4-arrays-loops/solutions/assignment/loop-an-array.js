const MAX = 20;
let arr = [];

// we loop from 1 to MAX (inclusive) and increment i (counter) by 3 each iteration (to print only every third number)
for (let i = 1; i <= MAX; i += 3) {
    arr.push(i);
}
console.log(arr);