

function nTablesPlusOne( num ) {
    let result = ""
    for( let i = 1; i <= 10; i++ ) {
        result += ( (num * i) + 1 )
        if( i == 10 ) { break }
        result += ","
    }
    return result
}



console.log( nTablesPlusOne(7) )

console.log( nTablesPlusOne(1) )

console.log( nTablesPlusOne(3) )



