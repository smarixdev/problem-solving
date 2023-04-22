

function calculateExponent( num, exp ) {
    // return num ** exp
    // return Math.pow( num, exp )
    let base = num
    for( let i = 1; i < exp; i++ ) {
        num *= base
    }
    return num
}

console.log( calculateExponent(5, 5) )

console.log( calculateExponent(10, 10) )

console.log( calculateExponent(3, 3) )




