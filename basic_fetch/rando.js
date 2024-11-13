/*function higher(func) {
    return function (...params) {
        console.log(fn(params))
    }
}

function fn(a,b,c) {
    console.log(`i have ${a} ${b} ${c}`)
}

higher(fn);
*/
function handleError(fn) {
    return function (...params) {
        return fn(...params).catch(function (err) {
            // do something with the error
            console.error('Oops!', err);
        })
    }
}


function adder(a,b,c) {
    return a + b + c;
}

function giveSquareFunctionality(fn) {
    return function (...params) {
        return fn(...params) * fn(...params)
    }
}

const result = giveSquareFunctionality(adder)(1,2,3);
console.log(result)

function higher() {
    return function lower(a,b,c) {
        console.log(a,b,c)
    }
}

higher()(1,2,3)