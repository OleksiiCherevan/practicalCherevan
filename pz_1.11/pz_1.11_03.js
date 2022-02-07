let EXAMPLE = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]

let GetArray = (arr) => {
    let res = []
    for(let i = 0; i < arr.length; i ++) {
        let element = arr[i]

        res.push(...element)
    }

    res.sort()

    return res
} 

console.log(GetArray(EXAMPLE));