const maxAge = 100;

// generate a random Integer between 0 and max (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log('-- if/else -- ');
const age = getRandomInt(maxAge);
console.log(`So you're ${age} years old...`);
if (age < 21) {
    console.log("Sorry, your're to young for this club.");
} else if (age < 60) {
    console.log("Alright, come in.");
} else {
    console.log("Sorry, you're to old for this club.");
}

// omit age limit for simplification
console.log('-- ternary expression --');
console.log(`So you're ${age} years old...`);
let msg = age < 21 ? "Sorry, you're to young for this club." : "Alright, come in.";
console.log(msg);