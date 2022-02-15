let nums = [144, 165, 144, 144, 144, 144, 144, 144]

let GetSingleNumber = (arr) => {
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

    let entries = Object.entries(checkedValues);
    let res = ''
    for (let i = 0 ; i < entries.length; i++) {
        let element = entries[i]
        if (element[1].count == 1)
            res = element[0]
    }
    return res
}

let res = GetSingleNumber(nums)
console.log(res);
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// [144, 165, 144, 144, 144, 144, 144, 144] ==> 165
