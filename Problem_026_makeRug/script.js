

function makeRug(m, n, s) {
    let result = []
    for( let i = 0; i < m; i++ ) {
        let newString = ""
        for( let o = 0; o < n; o++ ) {
            if( s ) {
                newString += s
            }
            else {
                newString += "#"
            }
        }
        result.push( newString )
    }
    return result
}



console.log( makeRug(3, 5) )
  
console.log( makeRug(3, 5, '$') )
  
console.log( makeRug(2, 2, 'A') )

