// Arrays //

// let array = [1,2,3,4,5,6];
// console.log(array[3]); // 1

// another way to create an array

// const array2 = new Array(1,2,3,4,5,6);
// console.log(array2[3]); // 4

// const array3 = new Array("Delhi","Mumbai","Pune")
// console.log(array3[2]); // pune

// Array Methods //

// array.push(9);
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift(0);
// console.log(array);

// let array2 = array.reverse();
// console.log(array2);


// const array = [1,2,3,4,5,6];
// console.log("A", array);

// const myarray = array.slice(1,3);
// console.log("B", myarray);

// const myarray1 = array.splice(1,3);
// console.log(myarray1);

// const array3 = [1,2,3,4,5,6];
// console.log("A", array3);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice


const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);