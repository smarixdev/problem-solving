

function findFactors( num ) {
    let result = []
    for( let i = 1; i <= num; i++ ) {
        if( num % i == 0 ) {
            result.push( i )
        }
    }
    return result
}



console.log( findFactors(9) )

console.log( findFactors(12) )

console.log( findFactors(20) )

console.log( findFactors(0) )




