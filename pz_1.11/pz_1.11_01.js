

let GetArray = (number) => {
    let arr = []

    for (let i = number; i > 0; i--) {
        arr.push(i)        
    }

    return arr
}

let res = GetArray(5)
console.log(res);