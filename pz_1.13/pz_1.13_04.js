function createGreetable(str) {
    const result = {};

    result.greet = function (greeting) {
        return `${greeting}, ${str}!`;
    };

    return result;
}

const g = createGreetable("Oleg");
console.log(g.greet("Hello"));
// console.log(g);
