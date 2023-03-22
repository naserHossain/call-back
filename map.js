const arr = [1, 2, 3];

let sqrArr = arr.map((value) => {
    // return Math.random() * 100;
    return value * value;
});

console.log(arr);
console.log(sqrArr);

/**
 * Map implementation by raw js
 */
const array = [2, 4, 6, 8, 10];

function mapArray(array, callBack) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let temporary = callBack(array[i]);
        newArray.push(temporary);
    }
    return newArray;

}

// console.log(mapArray(array));
const qb = mapArray(array, function (value) {
    return value * value * value;
});
console.log(qb);


const mTen = mapArray(array, (value) => {
    return value * 10;
});
console.log(mTen);