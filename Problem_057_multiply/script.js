

function multiply(arr) {
    // return function(num) {
    //     return arr.map(n => {
    //         return n * num
    //     })
    // }
    return num => arr.map(n => n * num)
}

console.log(multiply([1, 2, 3])(2)); // [2, 4, 6]

console.log(multiply([4, 6, 5])(10)); // [40, 60, 50]

console.log(multiply([1, 2, 3])(0)); // [0, 0, 0]

