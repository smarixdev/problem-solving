


function isVowel( letter ) {
    return Boolean(["a", "e", "i", "o", "u"].includes( letter ))
}

function split( str ) {
    let result = ""
    for( let lett of str ) {
        if( isVowel( lett ) ) {
            result += lett
        }
    }
    for( let lett of str ) {
        if( !isVowel( lett ) ) {
            result += lett
        }
    }
    return result
}



console.log( split("abcde") ) // "aebcd"

console.log( split("Hello!") ) // "eoHll!"

console.log( split("What's the time?") ) // "aeieWht's th tm?"







