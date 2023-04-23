

function squaresSum( num ) {
    let result = 0
    for( let i = 1; i <= num; i++ ) {
        result += ( i ** 2 )
    }
    return result
}



console.log( squaresSum(3) )

console.log( squaresSum(12) )

console.log( squaresSum(13) )



