

function acceptIntoMovie( age, isSupervised ) {
    // if( age >= 15 || isSupervised ) {
    //     return true
    // }
    // return false
    if( age >= 15 ) {
        return true
    }
    if( isSupervised ) {
        return true
    }
    return false
}

console.log( acceptIntoMovie(14, true) )

console.log( acceptIntoMovie(14, false) )

console.log( acceptIntoMovie(16, false) )




