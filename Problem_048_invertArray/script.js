

function invertArray( arr ) {
    // let result = []
    // for( let num of arr ) {
    //     result.push( -num )
    // }
    // return result
    for( let index in arr ) {
        arr[index] = -arr[index]
    }
    return arr
}


console.log(invertArray([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]

console.log(invertArray([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5]

console.log(invertArray([])); // []

