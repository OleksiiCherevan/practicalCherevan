const MAX_VALUE = 10;

function Log(value) {
    console.log(value);
    return value;
}

for (let i = 0; i < MAX_VALUE; i = Log(i) + 1);