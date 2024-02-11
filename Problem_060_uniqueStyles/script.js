

function uniqueStyles(styles) {
    // let arr = styles.join(",").split(",")
    // let result = []
    // for(let style of arr) {
    //     if(!result.includes(style)) result.push(style)
    // }
    // return result.length

    let arr = styles.join(",").split(",")
    return [...new Set(arr)].length
}

console.log(uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"
]));  // 9
  
console.log(uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"
])); // 7

