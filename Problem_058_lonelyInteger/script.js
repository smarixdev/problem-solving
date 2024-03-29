

function lonelyInteger(arr) {
    for(let num of arr) {
        if(!arr.includes(-num)) return num
    }
}


console.log(lonelyInteger([1, -1, 2, -2, 3])); // 3
// 3 has no matching negative appearance.

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])); // -4
// -4 has no matching positive appearance.

console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); // -9

