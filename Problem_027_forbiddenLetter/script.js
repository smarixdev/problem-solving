

function forbiddenLetter( letter, arr ) {
    let result = true
    for( let str of arr ) {
        // for( let lett of str ) {
        //     if( lett === letter ) {
        //         result = false
        //     }
        // }
        if( str.split("").includes( letter ) ) {
            result = false
        }
    }
    return result
}



console.log( forbiddenLetter("r", ["rock", "paper", "scissors"]) )

console.log( forbiddenLetter("a", ["spoon", "fork", "knife"]) )

console.log( forbiddenLetter("m", []) )



