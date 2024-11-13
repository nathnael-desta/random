function sumRange(n) {
    return n == 1 ? n : n + sumRange(n - 1);
}

// console.log(sumRange(3))

function power(b, e) {
    return e == 1 ? b : b * power(b, e - 1);
}

// console.log(power(2,3))

function factorial(n) {
    return n == 1 ? n : n * factorial(n - 1);
}

// console.log(factorial(5));


function all(arr, cb) {
    if (arr.length == 0) {
        return true;
    } else if (cb(arr.pop())) {
        return all(arr, cb);
    } else {
        return false;
    }
}


var allAreLessThanSeven = all([1,2,6], function(num){
	return num < 7;
});

// console.log(allAreLessThanSeven); // false


function productOfArray(arr) {
    return arr.length == 0 ? 1 : arr.pop() * productOfArray(arr);
}

var sixty = productOfArray([1,2,3,10]) // 60
// console.log(sixty)


var nestedObject = {
    data: {
        info: {
            moreStuff: {
                something: '1',
                something3: '2',
                moreStuffs: {
                    something: '3',
                    something3: '4'
                }
            },
            stuff: {
                thing: {
                    moreStuff: {
                        something: '7',
                        magicNumber: 44,
                        something3: '8'
                    },

                    moreStuffs: {
                        something: '5',
                        something3: '6'
                    }

            
                }
            }
        },
        moreStuff: {
            something: '9',
            something3: '10'
        }
    }
}

function arrMaker(obj) {
    let newArr = [];
    for (let value of Object.values(obj)){
        if (typeof value != "object") {
            newArr.push(value);
        } else {
            let returnedArr = arrMaker(value);
            newArr = newArr.concat(returnedArr);
        }   
    }
    return newArr;

}

// console.log(arrMaker(nestedObject))

function contains(obj, check) {
    let result = false;
    for (let value of Object.values(obj)) {
        if (typeof value != "object") {
            if (value == check) {
                result = true;
            }
        } else {
            let returnedValue = contains(value,check);
            if (returnedValue == true) {
                result = true;
            }
        }
    }
    
    return result;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log(hasIt, doesntHaveIt);

function totalIntegers(arr) {
    let total = 0;
    for (let value of arr ) {
        if (typeof value != 'object') {
            if (Number.isInteger(value)) {
                total++;
            }
        } else {
            total += totalIntegers(value);
        }
    }
    return total;
}


var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven)


function SumSquares(arr) {
    let total = 0;
    for (let value of arr) {
        if (typeof value != "object") {
            if (Number.isInteger(value)) {
                total += value * value;
            }
        } else {
            total += SumSquares(value)
        }
    }
    return total;
}


// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400


function replicate(times, num, result = []) {
    if (times < 0) {
        return []
    } else if (times == 0) {
        return result
    } else {
        result.push(num);
        times--;
        return replicate(times, num,result)
    }
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

