

function sumOfEvens( matrix ) {
    let result = 0
    for( let arr of matrix ) {
        for( let item of arr ) {
            if( item % 2 === 0 ) {
                result += item
            }
        }
    }
    return result
}



console.log( sumOfEvens([
    [1, 0, 2],
    [5, 5, 7],
    [9, 4, 3]
  ]) )
  
console.log(  sumOfEvens([
    [1, 1],
    [1, 1]
  ]))
  
console.log(  sumOfEvens([
    [42, 9],
    [16, 8]
  ]))

console.log(  sumOfEvens([
    [],
    [],
    []
  ]));




