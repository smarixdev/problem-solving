
function leapYear( year ) {
    if( year % 4 == 0 && year % 100 != 0 ) {
        return true
    }
    else if( year % 400 == 0 ) {
        return true
    }
    return false
}


console.log( leapYear(1200) )

// console.log( leapYear(1924) )

// console.log( leapYear(2021) )



