

function addOddToN( n ) {
    let result = 0
    for( let i = 0; i <= n; i++ ) {
        if( i % 2 == 1 ) {
            result += i
        }
    }
    return result
}


console.log( addOddToN(5) )

console.log( addOddToN(13) )

console.log( addOddToN(47) )




