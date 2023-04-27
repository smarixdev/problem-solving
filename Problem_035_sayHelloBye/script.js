

function capetalize( str ) {
    let first = str[0].toUpperCase()
    let last = str.slice( 1 )
    return first + last
}

function sayHelloBye( username, num ) {
    // if( num === 1 ) {
    //     return "Hello " + capetalize(username)
    // }
    // else {
    //     return "Bye " + capetalize(username)
    // }
    if( num === 1 ) {
        return "Hello " + username[0].toUpperCase() + username.slice(1)
    }
    else {
        return "Bye " + username[0].toUpperCase() + username.slice(1)
    }
}



console.log( sayHelloBye("alon", 1) )

console.log( sayHelloBye("Tomi", 0) )

console.log( sayHelloBye("jose", 0) )



