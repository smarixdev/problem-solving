




function boolToString( bool ) {
    // if( bool === true ) {
    //     return "true"
    // }
    // else if( bool === false ) {
    //     return "false"
    // }
    // if( typeof bool == 'boolean' ) {
    //     return String( bool )
    // }
    return bool == true ? "true" : "false"
}



console.log( boolToString(true) )

console.log( boolToString(false) )



