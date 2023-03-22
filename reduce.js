const arr = [2, 4, 7, 9, 11, 15];

const sum = arr.reduce((acc, curr) => {
    console.log("acc =", acc);
    console.log("curr", curr);
    return acc + curr;
}, 100);

// console.log(sum);

/**
 * Reduce method implementation 
 */

function myReduce(array, cb, acc) {
    for (let i = 0; i < array.length; i++) {
        acc = cb(acc, array[i]);
    }
    return acc;
}

const sum2 = myReduce(arr, (prev, curr) => {
    return prev + curr;
}, 100);

const max = myReduce(arr, (prev, curr) => {
    return Math.max(prev, curr);
}, 0);

const min = myReduce(arr, (prev, curr) => {
    return Math.min(prev, curr);
}, 1);

console.log(sum2, max, min);
