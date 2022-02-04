const MIN_VALUE = 50;
const DIVIDER = 2

let numb = 10000;

let counter = 0;
let result = 0;

do {
    numb /= DIVIDER

    counter++;
    result = numb;
} while (numb > MIN_VALUE)

console.log(counter, result);