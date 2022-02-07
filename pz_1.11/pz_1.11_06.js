let NUMBERS = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

let DeleteCopy = (arr) => Array.from(new Set(arr))

console.log(NUMBERS);
console.log(DeleteCopy(NUMBERS));
