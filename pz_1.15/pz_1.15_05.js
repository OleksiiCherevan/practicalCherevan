
const REG_EXP = /([a-яА-ЯA-Za-z]{1,})/ig
const TEST_TEXT = "альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма гамма дельта"

const GetStringsByPattern = (string, pattern=REG_EXP ) => string.match(pattern)

let GetCountByElement = (arr) => {
    let checkedValues = {}

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (checkedValues[element]) {
            checkedValues[element] = {
                count : checkedValues[element].count + 1
            }
        } else {
            checkedValues[element] = {
                count : 1
            }
        }
    }

    return checkedValues
}
let strings = GetStringsByPattern(TEST_TEXT)
let countStrings = GetCountByElement(strings)
console.log(countStrings);