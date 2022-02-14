class Random {
    constructor(props) {}

    static nextFloat(min, max) {
        let float = min + Math.random() * (max - min);
        return float;
    }

    static nextNumber(min, max) {
        let number = this.nextFloat(min, max);
        return Math.round(number);
    }

    static nextElement(arr) {
        let index = this.nextNumber(0, arr.length);
        return arr[index];
    }
}

let arr = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

let [numbers, floats] = [[], []]
let [low, high] = [5, 20]
for (let i = 0; i < 100; i++) {
    let randomNumber = Random.nextNumber(low, high);
    let randomFloat = Random.nextFloat(low, high)
    numbers.push(randomNumber);
    floats.push(randomFloat)
}

console.log(`Min number: ${Math.min(...numbers)} Max number: ${Math.max(...numbers)}`);
console.log(`Min float: ${Math.min(...floats)} Max float: ${Math.max(...floats)}`);

console.log(Random.nextElement(arr));
