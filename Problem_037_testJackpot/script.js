

function testJackpot( arr ) {
    let start = arr[0]
    let check = true
    for( let one of arr ) {
        if( one !== start ) {
            check = false
        }
    }
    return check
}



console.log( testJackpot(["@", "@", "@", "@"]) )

console.log( testJackpot(["abc", "abc", "abc", "abc"]) )

console.log( testJackpot(["SS", "SS", "SS", "SS"]) )

console.log( testJackpot(["&&", "&", "&&&", "&&&&"]) )

console.log( testJackpot(["SS", "SS", "SS", "Ss"]) )



