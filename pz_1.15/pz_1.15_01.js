const MIN = 0;
const MAX = 9999;

const TEN = 10;
const HUNDRED = 100;
const THOUSAND = 1000;

let testValue = 2999;

const GetProNumber = (value) => {
    let number = value;
    let [single, tens, hundreds, thousands] = [0, 0, 0, 0];

    thousands = number > THOUSAND ? Math.floor(number / THOUSAND)  : 0;
    number -= thousands * THOUSAND;

    hundreds = number > HUNDRED ? Math.floor(number / HUNDRED)  : 0;
    number -= hundreds * HUNDRED;

    tens = number > TEN ? Math.floor(number / TEN)  : 0;
    number -= tens * TEN;

    single = number;

    const res = (value < MIN || value > MAX)
            ? {}
            : {
                  одиницi: single,
                  десятки: tens,
                  сотнi: hundreds,
                  тисячi: thousands,
              };

    if (res === 0) {
        console.log('Some text');
    }

    return res;
};

console.log(GetProNumber(testValue));
