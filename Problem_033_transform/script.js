

function transform( arr ) {
    for( let index in arr ) {
        if( arr[index] % 2 == 0 ) {
            arr[index] = arr[index] - 1
        }
        else {
            arr[index] = arr[index] + 1
        }
    }
    return arr
}



console.log( transform([1, 2, 3, 4, 5]) )

console.log( transform([3, 3, 4, 3]) )

console.log( transform([2, 2, 0, 8, 10]) )





