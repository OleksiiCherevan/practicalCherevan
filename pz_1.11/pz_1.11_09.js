

let ARR = ['1', 2, '3', 434, Boolean, 'world', 'Hello' ]

let isNumber = (num) => {
    return ( typeof num == 'number' )
}

function Reverse(arr = []) {
    arr.reverse()
}

let  SquareNumbers = (arr = []) => arr.map(item => (isNumber(item) ? item * item : item))


let arr = ARR
console.log('arr', arr);
Reverse(arr)
console.log('reverse ', arr);
let squareArr = SquareNumbers(arr)
console.log('square', squareArr);