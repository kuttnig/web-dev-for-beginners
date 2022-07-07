function removeDuplicatesFromArray(array) {
    let arr = array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    return arr;
}

function sortDescending(array) {
    let arr = array.sort((a, b) => {
        if (a > b) {
            return -1;
        }
        return 1;
    });
    return arr;
}

const firstArr = [1, 1, 2, 2, 3, 4, 5, 5, 6];
console.log('Input array: ' + firstArr);

const secondArr = removeDuplicatesFromArray(firstArr);
console.log('Array without duplicates: ' + secondArr);

const thirdArr = sortDescending(secondArr);
console.log('Array without duplicates sorted in descending order: ' + thirdArr);
