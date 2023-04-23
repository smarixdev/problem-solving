

function addIndexes( arr ) {
    let result = []
    for( let i in arr ) {
        result[i] = Number(i) + arr[i]
    }
    return result
}



console.log( addIndexes([0, 0, 0, 0, 0]) )

console.log( addIndexes([1, 2, 3, 4, 5]) )

console.log( addIndexes([5, 4, 3, 2, 1]) )



