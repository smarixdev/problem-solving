

function integerBoolean( str ) {
    let arr = []
    for( let i of str ) {
        // if( i == 1 ) {
        //     arr.push( true )
        // }
        // else {
        //     arr.push( false )
        // }
        arr.push( Boolean(Number(i)) )
    }
    return arr
}



console.log( integerBoolean("100101") )

console.log( integerBoolean("10") )

console.log( integerBoolean("001") )



