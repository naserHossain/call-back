const arr = [3, 5, 7, 1, 8, 14, 24, 35];

const filtered = arr.filter((value) => {
    // return value > 10;
});

// console.log(filtered);


function filterArray(array, callBack) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i]))
            newArray.push(array[i]);
    }
    return newArray;
}
const partArray = filterArray(arr, (value) => {
    return value % 2 === 0;
});

console.log(partArray);