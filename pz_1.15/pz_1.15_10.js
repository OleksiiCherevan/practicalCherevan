const RemoveRepeats = (string) => Array.from(new Set(string.split(' ')))

const TEST = "альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма гамма дельта"

console.log(TEST);
console.log(RemoveRepeats(TEST));