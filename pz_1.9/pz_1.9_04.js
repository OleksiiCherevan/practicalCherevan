const COUNT_LEVELS = 5;

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

    return res;
}

const COUNT_SHAPES = 3;
const SPACE_BETWEN = 1;
const PRIMARY_SYMBOL = "*";
const GAP_SYMBOL = " ";

for (let i = 1; i <= COUNT_LEVELS; i++) {
    let firstShapeFloor = i;
    let secondShapeFloor = i;
    let thirdShapeFloor = i;

    let firstGapsCount =
        COUNT_LEVELS * 2 + SPACE_BETWEN - firstShapeFloor - secondShapeFloor;
    let secondGapsCount =
        secondShapeFloor < GetMediana(COUNT_LEVELS) ?
        firstGapsCount :
        COUNT_LEVELS;

    let firstShapeCount = firstShapeFloor;
    let secondShapeCount = GetFloorLength(secondShapeFloor);

    let thirdRombCount = GetRombCount(COUNT_LEVELS, thirdShapeFloor);
    let thirdShapeCount = GetFloorLength(thirdRombCount);

    let firstShapeSymbols = GetSymbolsByCount(firstShapeCount, PRIMARY_SYMBOL);
    let secondShapeSymbols = GetSymbolsByCount(
        secondShapeCount,
        PRIMARY_SYMBOL
    );
    let thirdShapeSymbols = GetSymbolsByCount(thirdShapeCount, PRIMARY_SYMBOL);
    let firstGapSymbols = GetSymbolsByCount(firstGapsCount, GAP_SYMBOL);
    let secondGapSymbolos = GetSymbolsByCount(secondGapsCount, GAP_SYMBOL);

    console.log(
        firstShapeSymbols,
        firstGapSymbols,
        secondShapeSymbols,
        secondGapSymbolos,
        thirdShapeSymbols
    );
}

// *         *         *
// **       ***       ***
// ***     *****     *****
// ****   *******     ***
// ***** *********     *