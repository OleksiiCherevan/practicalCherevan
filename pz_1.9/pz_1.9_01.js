const MAX_VALUE = 100;
let simpleNumbers = []

let i = 0;
while (i < MAX_VALUE) {
    let divideCount = 0;

    j = 0
    while (j <= i) {

        if (i % j === 0 && i != 1) {
            divideCount++
        }

        if (divideCount === 2 && i === j) {
            simpleNumbers.push(i)
        }

        j++;
    }

    i++;
}

console.log(simpleNumbers);