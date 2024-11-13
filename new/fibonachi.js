function fibIteration (len) {
    let result = len == 0 ? [] : len == 1 ? [0] : arrayer(len);
    function arrayer(num, arr = [0,1]){
        
        for (let i = 0 ; i < (num - 2);i++ ) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
        return arr
    }
    return result
}

// console.log(fibIteration(8))

function fibRecursion(len,arr = [0,1]) {
    if (len < 3) {
        return arr.slice(len);
    } else {
        return fibCreator(len - 2, arr);
    }

    function fibCreator(len, arr) {
        if (len == 0) {
            return arr;
        } else {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            return fibCreator(len - 1, arr);
        }
    }
}

console.log(fibRecursion(8))