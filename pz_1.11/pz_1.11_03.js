let EXAMPLE = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]

let GetArray = (arr = []) => {
    return arr.reduce((accum, item) =>  accum.concat(...item)).sort()
}

console.log(GetArray(EXAMPLE));