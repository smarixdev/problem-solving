

function arrIndex(arr, idx) {
    // let count = 0
    // let result = ""
    // for (let smallArr of arr) {
    //     for (let letter of smallArr) {
    //         count++
    //         if (idx.includes(count)) {
    //             result += letter
    //         }
    //     }
    // }
    // return result
    let bigArr = []
    arr.forEach(smallArr => {
        bigArr.push(...smallArr)
    })
    return bigArr.filter((item, index) => {
        if (idx.includes(index + 1)) return true
        return false
    }).join("")
}

let lst = [
    ["m", "u", "b"],
    ["a", "s", "h"],
    ["i", "r", "1"]
]

let idx = [1, 3, 5, 8]

console.log(arrIndex(lst, idx)) // "mbsr"

