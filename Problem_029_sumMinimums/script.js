

function getMin( arr ) {
    let smallest = arr[0]
    for( let item of arr ) {
        if( item < smallest ) {
            smallest = item
        }
    }
    return smallest
}

function sumMinimums( arrs ) {
    let result = 0
    for( let arr of arrs ) {
        result += getMin( arr )
    }
    return result
}



console.log( sumMinimums([
    [8, 10, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [26, 21, 34, 56, 100]
  ]) )




