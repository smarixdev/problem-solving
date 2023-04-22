


function profitableGamble(prop, price, pay) {
    let result = prop * price
    if( result > pay ) {
        return true
    }
    else {
        return false
    }
}



console.log(profitableGamble(0.2, 50, 9))

console.log( profitableGamble(0.9, 1, 2) )

console.log( profitableGamble(0.9, 3, 2) )






