function sample(a, b, callBack) {
    const C = a + b;
    const D = a - b;


    const res2 = callBack(C, D);
    return res2;
}

function sum(x, y) {
    return x + y;
}



// const result2 = sample(12, 10);
// console.log(result2);

const result = sample(10, 6, sum);
console.log(result);



function something(A, B, cb) {
    const C = A + B;
    const D = A - B;


    const fRes = cb(C, D);
    return fRes;


}

function innerFunctionSum(x, y) {
    return x + y;
};

const rs = something(20, 10, innerFunctionSum);
console.log(rs);

// yes I understand callBack again