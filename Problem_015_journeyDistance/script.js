

function journeyDistance( cost ) {
    if( cost === 3 ) {
        return 1
    }
    else if( cost > 3 ) {
        cost -= 3
        let kilos = cost / 2
        return kilos + 1
    }
    else {
        return 0
    }
}

console.log( journeyDistance(3) )

console.log( journeyDistance(9) )

console.log( journeyDistance(5) )




