

function century( year ) {
    // return Math.ceil( year / 100 ) + "th century"
    let yearStr = String( year )
    let cent = yearStr.slice( 0, 2 )
    let last = yearStr.slice( 2 )
    if( last == "00" ) {
        return cent + "th century"
    }
    else {
        return (Number(cent) + 1) + "th century"
    }
}



console.log( century(1756) ) // "18th century"

console.log( century(1555) ) // "16th century"

console.log( century(1000) ) // "10th century"

console.log( century(1001) ) // "11th century"

console.log( century(2005) ) // "21st century"




