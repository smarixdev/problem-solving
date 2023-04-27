

function check( arr ) {
    let first  = arr[0]
    let second = arr[1]
    if( first > second ) {
        let result = "decreasing"
        for(let i = 0; i < arr.length - 1; i++) {
            if( arr[i] < arr[i + 1] ) {
                result = "neither"
            }
        }
        return result
    }
    else if( first < second ) {
        let result = "increasing"
        for(let i = 0; i < arr.length - 1; i++) {
            if( arr[i] > arr[i + 1] ) {
                result = "neither"
            }
        }
        return result
    }
    else {
        return "neither"
    }
}




console.log( check([1, 2, 3]) ) // "increasing"

console.log( check([3, 2, 1]) ) // "decreasing"

console.log( check([1, 2, 1]) ) // "neither"

console.log( check([1, 1, 2]) ) // "neither"




