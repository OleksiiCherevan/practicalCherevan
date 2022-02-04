// 0 – це нуль
// 1 – непарне число
// 2 – парне число
// 3 – непарне число
//       …
// 10 – парне число
const MAX_VALUE = 20;
const ZERO_TEXT = " - це нуль"
const EVEN_NUMBER = " - парне число"
const NOT_EVEN_NUMBER = " - не парне число"

let i = 0;
do {
    let number = i++;

    if (number == 0) {
        console.log(number, ZERO_TEXT);
    } else if (number % 2 == 0) {
        console.log(number, EVEN_NUMBER);
    } else {
        console.log(number, NOT_EVEN_NUMBER);
    }

} while (i <= MAX_VALUE)