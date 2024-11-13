let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let nonDuplicate = [];

for (let num of array) {
    if (nonDuplicate.indexOf(num) == -1) {
        nonDuplicate.push(num);
    }
}
console.log(nonDuplicate)