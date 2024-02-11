

function reverseCapitalize(str) {
    let reversed = []
    for(let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i])
    }
    return reversed.join("").toUpperCase()
}

console.log(reverseCapitalize("abc")); // "CBA"

console.log(reverseCapitalize("hellothere")); // "EREHTOLLEH"

console.log(reverseCapitalize("input")); // "TUPNI"

