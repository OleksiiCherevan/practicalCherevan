let WARNING_MESSAGE = 'Something wrong...'


let isNumber = (num) => {
    return ( typeof num == 'number' )
}

let Add = (a, b) => (isNumber(b) && isNumber(a)) ? a + b :WARNING_MESSAGE 


let Sub = (a, b) => (isNumber(b) && isNumber(a)) ?  a - b :WARNING_MESSAGE 


let Mul = (a, b) => (isNumber(b) && isNumber(a)) ?  a * b :WARNING_MESSAGE 


let Div = (a, b) => b !== 0 && (isNumber(b) && isNumber(a)) ? a / b :WARNING_MESSAGE 


let Calc = (a, b, func) => {
    return func(a, b)
}

console.log(Calc(4, 5, Add));
console.log(Calc(7, 7, Mul));
