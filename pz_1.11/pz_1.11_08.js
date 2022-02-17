let GetArr = (size = 10, border = 100) => {
    let res = [];

    for (let i = 0; i < size; i++) {
        res.push(Math.floor(Math.random() * border * 2) - border);
    }

    return res;
};

let Calculate = (arr = []) => {
    let sum = arr.reduce((accum, value) => accum + value);

    let count = arr.length

    return sum / count;
};

let arr = GetArr()

console.log(arr);

let avg = Calculate(arr)

console.log(avg);

