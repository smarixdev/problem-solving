

function basicCalculator(a, o, b) {
    let result = null;
    if(o === "+") { 
        result = a + b;
    }
    else if(o === "-") {
        result = a - b;
    }
    else if(o === "/" && b !== 0) { 
        result = a / b;
    }
    else if(o === "*") {
        result = a * b;
    }
    return result;
}


console.log(basicCalculator(2, '+',  4));

console.log(basicCalculator(6, '-', 5));

console.log(basicCalculator(12, '/', 3));

console.log(basicCalculator(3, '*', 4));

console.log(basicCalculator(1, '/', 0));

console.log(basicCalculator(1, 'x', 0));




