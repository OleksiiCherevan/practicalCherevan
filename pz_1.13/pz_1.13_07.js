const OBJ = {
    a: 1,
    b: 1,
    c: 2,
    d: 3,
    e: 5,
};

const ARR = [1, 1, 2, 3, 5, 8];

const GetCountEntries = (obj) => (typeof obj === "object") ? Object.entries(obj).length : obj.length;

let res = GetCountEntries(ARR);

console.log(res);
