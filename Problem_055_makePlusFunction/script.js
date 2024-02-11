

function makePlusFunction(base) {
    return num => base + num
}


const plusFive = makePlusFunction(5)

console.log(plusFive(2)); // 7
console.log(plusFive(-8)); // -3


const plusTen = makePlusFunction(10)

console.log(plusTen(0)); // 10
console.log(plusTen(188)); // 198
console.log(plusFive(plusTen(0))); // 15

