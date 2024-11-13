var arr = [];

setTimeout(function() {
  arr.push(1, 2, 3);
}, 5000);

setTimeout(() => {
    console.log(arr.length);

console.log(arr);
}, 5000)
