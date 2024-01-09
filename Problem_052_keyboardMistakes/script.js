

function keyboardMistakes(text) {
    // let replced = ""
    // for (let letter of text) {
    //     if (letter == 0) replced += "O"
    //     else if (letter == 1) replced += "I"
    //     else if (letter == 4) replced += "A"
    //     else if (letter == 5) replced += "S"
    //     else replced += letter
    // }
    // return replced
    let replce = {
        0: "O", 1: "I", 4: "A", 5: "S"
    }
    let numbers = Object.keys(replce)
    return text.split("").map(letter => {
        if (numbers.includes(letter)) {
            return replce[letter]
        }
        return letter
    }).join("")
}


console.log(keyboardMistakes("MUB45H1R")) // "MUBASHIR"

console.log(keyboardMistakes("DUBL1N")) // "DUBLIN"

console.log(keyboardMistakes("51NG4P0RE")) // "SINGAPORE"

