// Array traverse by using forEach method 

const arr = [
    { name: "Joseph", email: "joseph@gmail.com" },
    { name: "Jennifer", email: "jeniffer@gmail.com" },
    { name: "Nicholas", email: "nicholas@gmail.com" },
    { name: "Robert", email: "robert@gmail.com" },
    { name: "James", email: "james@gmail.com" }
];

arr.forEach((index, value, arr) => {
    // console.log("value = ", value);
    // console.log("Index = ", index);
    // console.log("Arr = ", arr);

});


// For each method implement by using raw js

const array = [2, 4, 6, 8, 10];

function forEach(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i], i, array);
    }

}

let sum = 0;
forEach(array, (value, index, array) => {
    sum += value;
    console.log(value, index, array);
});
console.log(sum);