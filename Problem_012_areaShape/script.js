
function areaShape( b, h, sh ) {
    // if( sh == "triangle" ) {
    //     return 0.5 * b * h
    // }
    // else if( sh == "parallelogram" ) {
    //     return b * h
    // }
    let methods = {
        triangle: (b, h) =>  0.5 * b * h,
        parallelogram: (b, h) => b * h
    }
    return methods[sh](b, h)
}

console.log(areaShape(2, 3, "triangle"))

console.log( areaShape(8, 6, "parallelogram") )

console.log( areaShape(2.9, 1.3, "parallelogram") )



