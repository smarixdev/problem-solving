

function hackerSpeak( string ) {
    // let result = ""
    // for( let letter of string ) {
    //     if( letter == "a" ) {
    //         result += 4
    //     }
    //     else if( letter == "e" ) {
    //         result += 3
    //     }
    //     else if( letter == "i" ) {
    //         result += 1
    //     }
    //     else if( letter == "o" ) {
    //         result += 0
    //     }
    //     else if( letter == "s" ) {
    //         result += 5
    //     }
    //     else {
    //         result += letter
    //     }
    // }
    // return result

    let letters = { a: 4, e: 3, i: 1, o: 0, s: 5 }
    let result = ""
    for( let letter of string ) {
        if( ['a', 'e', 'i', 'o', 's'].includes(letter) ) {
            result += letters[ letter ]
        }
        else {
            result += letter
        }
    }
    return result
}



console.log( hackerSpeak("javascript is cool") )

console.log( hackerSpeak("programming is fun") )

console.log( hackerSpeak("become a coder") )



