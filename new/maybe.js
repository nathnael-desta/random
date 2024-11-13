function nSumLoop(n) {
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        sum += index;
    }
    return sum;
}

function nSumRecursion(n) {
    if (n == 1) {
        return n;
    } else {
        return n + nSumRecursion(n - 1);
    }
}

function artN(n) {
    return n / 2 * (1 + n)
}

// console.log(nSumLoop(100));
// console.log(nSumRecursion(100))
// console.log(artN(100))



function factorial(n) {
    if (n == 1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

// console.log(factorial(5))



function fibo(n) {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

// console.log(fibo(7))


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function loopSum(list) {
    let sum = 0;
    while (list.next != null) {
        sum += list.value;
        list = list.next;
    }
    sum += list.value;
    return sum;

}

// console.log(loopSum(list))

function recursiveSum(list) {
    if (list.next == null) {
        return list.value;
    } else {
        return list.value + recursiveSum(list.next);
    }
}

// console.log(recursiveSum(list))

list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  let listCopy = Object.assign({}, list)

function reverseLoop(list) {
    let temp;
    let prev = null;
    while (list) {
        temp = list.next;
        list.next = prev;
        prev = list;
        //console.log(list)
        if (temp == null) {
            break;
        }
        list = temp;
        
    }
    return list;
}

//console.log(reverseLoop(list));

function reverseRecursion(list, prev = null) {
    if (list.next == null) {
        list.next = prev;
        console.log(list);
        return list;
    } else {
        let temp;
        temp = list.next;
        list.next = prev;
        prev = list;
        list = temp;
        console.log(prev)
        return reverseRecursion(list,prev);
    }
}

// console.log(reverseRecursion(listCopy));

console.log('addis'.split(' ').join("-"))
const date = new Date();
const hour = date.getHours();
console.log(hour)

console.log("addis ababa".split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))