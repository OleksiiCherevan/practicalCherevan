let IsPositive = (number) => {
    return number > 0
} 

let IsSimple = (number) => {
    let res = false

    let i = number;
    let divideCount = 0;

    j = 0;
    while (j <= i) {
        if (i % j === 0 && i != 1) {
            divideCount++;
        }
        if (divideCount === 2 && i === j) {
            res = true;
        }
        j++;
    }

    return res;
};

let PrintInfoAboutNumber = (number) => {
    let positiveInfo = IsPositive(number) ? number + " number is positive" : "This number is negative";
    console.log(positiveInfo);
    
    let simpleInfo = IsSimple(number) ? number + " number is simple" : "This number isn`t simple";
    console.log(simpleInfo);

    let divideInfo = (number % (2,3,5,6,9) === 0) ? number + " number is divide 2, 5, 3, 6, 9 without 0" : "This number isn`t divide 2, 5, 3, 6, 9 without 0";
    console.log(divideInfo);
}

PrintInfoAboutNumber(10);