const UniTotal = (string) => {
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        sum+= element.codePointAt()
    }

    return sum
}


console.log(UniTotal('aa'));