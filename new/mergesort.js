function merge(l, r) {
    let result = [];
    while (l.length != 0 && r.length != 0) {
        if (l[0] <= r[0]) {
            result.push(l[0]);
            l.shift();
        } else {
            result.push(r[0]);
            r.shift();
        }
    }
    if (l.length == 0) {
        result = result.concat(r);
    } else {
        result = result.concat(l);
    }
    return result;
}

function mergesort(arr) {
    if (arr.length == 1) {
        return arr
    } else {
        let left = arr.splice(0, Math.floor(arr.length / 2));
        let right = arr;
        let leftSorted = mergesort(left);
        let rightSorted = mergesort(right);
        return merge(leftSorted, rightSorted);
    }
}

console.log(mergesort([3, 2, 1, 13,3, 8, 5, 0, 1]));