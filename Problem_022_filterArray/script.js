

function filterArray( arr ) {
    let result = []
    for( let one of arr ) {
        if( typeof one === "number" ) {
            result.push( one )
        }
    }
    return result
}



console.log( filterArray([1, 2, 3, "a", "b", 4]) )

console.log( filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) )

console.log( filterArray(["Nothing", "here"]) )


