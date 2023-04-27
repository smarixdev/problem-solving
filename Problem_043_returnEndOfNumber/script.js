

function getCase( str ) {
    let special = ["11", "12", "13"]
    if( special.includes( str ) ) {
        return "-TH"
    }
    else {
        if( str[ str.length - 1 ] === "1" ) {
            return "-ST"
        }
        else if( str[ str.length - 1 ] === "2" ) {
            return "-ND"
        }
        else if( str[ str.length - 1 ] === "3" ) {
            return "-RD"
        }
        else {
            return "-TH"
        }
    }
}


function returnEndOfNumber( num ) {
    let str = String( num )
    return num + getCase( str.slice( -2 ) )
}


console.log( returnEndOfNumber(553) ) // "553-RD"

console.log( returnEndOfNumber(34) ) // "34-TH"

console.log( returnEndOfNumber(1231) ) // "1231-ST"

console.log( returnEndOfNumber(22) ) // "22-ND"

console.log( returnEndOfNumber(412) ) // "412-TH"




