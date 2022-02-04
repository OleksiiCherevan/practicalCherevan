function GetSymbolsByCount(count, symbol = " ") {
    let symbols = "";

    for (let i = 0; i < count; i++) {
        symbols += symbol;
    }

    return symbols;
}

function GetMediana(count) {
    return count % 2 === 0 ? count / 2 : Math.floor(count / 2) + 1;
}

function GetFloorLength(count) {
    return count % 2 === 0 ? count * 2 - 1 : count * 2 - 1;
}

function GetRombCount(count, index) {
    let mediana = GetMediana(count);

    let res = index > mediana ? mediana - (index - mediana) : index;
    res = count % 2 == 0 && index > mediana ? res + 1 : res;

    return res;
}

function PrintShapes(
    _countLevels = 10,
    spaceBetween = 1,
    primarySymbol = "*",
    gapSymbol = " "
) {
    let countLevels = _countLevels * 1;

    for (let i = 1; i <= countLevels; i++) {
        let firstShapeFloor = i;
        let secondShapeFloor = i;
        let thirdShapeFloor = i;

        let firstGapsCount =
            countLevels * 2 + spaceBetween - firstShapeFloor - secondShapeFloor;

        let secondGapsCount =
            secondShapeFloor <= GetMediana(countLevels) ?
            firstGapsCount :
            countLevels + spaceBetween - 1;

        let firstShapeCount = firstShapeFloor;
        let secondShapeCount = GetFloorLength(secondShapeFloor);

        let thirdRombCount = GetRombCount(countLevels, thirdShapeFloor);
        let thirdShapeCount = GetFloorLength(thirdRombCount);

        let firstShapeSymbols = GetSymbolsByCount(
            firstShapeCount,
            primarySymbol
        );
        let secondShapeSymbols = GetSymbolsByCount(
            secondShapeCount,
            primarySymbol
        );
        let thirdShapeSymbols = GetSymbolsByCount(
            thirdShapeCount,
            primarySymbol
        );
        let firstGapSymbols = GetSymbolsByCount(firstGapsCount, gapSymbol);
        let secondGapSymbolos = GetSymbolsByCount(secondGapsCount, gapSymbol);

        console.log(
            firstShapeSymbols,
            firstGapSymbols,
            secondShapeSymbols,
            secondGapSymbolos,
            thirdShapeSymbols
        );
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Оберiть кiлькiсть поверхiв: ", (count) => {
    let levels = count * 1;

    if (!isNaN(levels)) {
        console.log(`Kiлькiсть поверхiв:! ${levels}`);
        console.log();
        PrintShapes(levels, 1, '*', ' ');
    } else {
        console.log("Дивне число...");
    }

    readline.close();
});

// *         *         *
// **       ***       ***
// ***     *****     *****
// ****   *******     ***
// ***** *********     *