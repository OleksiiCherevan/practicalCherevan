// [[ 22 , -1   ,  0  , 43, 57],      [[ 1 , -1  , 0, 43, 57],
//  [-33 ,  10  ,  5  , 4 , 8 ],       [-33,  1  , 5, 4 , 8 ],
//  [ 3  , -1   , -44 , 44, 87], ==>   [ 3 , -1  , 0, 44, 87],
//  [ 4  , -331 ,  0  , 18, 4 ],       [ 4 , -331, 0, 1 , 4 ],
//  [ 6  , -31  ,  9  , 77, 4 ]]       [ 6 , -31 , 9, 77, 1 ]]


let Get2dArr = (size=5, max=100) => {
    let res = []
    for (let i = 0; i < size; i++) {
        let firstFloor = []
        
        for (let j = 0; j < size; j++) {
            firstFloor.push(Math.floor(Math.random() * (max*2)-max ))
        }

        res.push(firstFloor)
    }
    return res
}

let ChangeMainDiagonal = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i][i];
        
        if (element < 0) {
            arr[i][i] = 0
        } else {
            arr[i][i] = 1
        }
    }
}

let arr = Get2dArr();

console.log(arr);

ChangeMainDiagonal(arr)

console.log(arr);