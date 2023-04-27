

function reverseComplement( rna ) {
    let result = ""
    for( let i = rna.length - 1; i >= 0; i-- ) {
        if( rna[i] === "A" ) {
            result += "U"
        }
        else if( rna[i] === "U" ) {
            result += "A"
        }
        else if( rna[i] === "C" ) {
            result += "G"
        }
        else if( rna[i] === "G" ) {
            result += "C"
        }
    }
    return result
}



console.log( reverseComplement("GUGU") ) // "ACAC"

console.log( reverseComplement("UCUCG") ) // "CGAGA"

console.log( reverseComplement("CAGGU") ) // "ACCUG"



