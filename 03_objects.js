// objects //

// console.log("A");
// console.log("T");
// console.log("H");
// console.log("A");
// console.log("R");
// console.log("V");
// console.log("A");

// function myname() {
//     console.log("A");
//     console.log("T");
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("V");
//     console.log("A");
// }

// myname()

// function addtwonumber(num1,num2) {
//     return (num1 + num2)
// }

// let sum = addtwonumber(3,6)
// console.log(sum);

// another method of function declaring

function addition(num1,num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// let result= addition(7,7);
// console.log("result is: ", result)

// console.log(addition(6,45))

function userloggedin(username) {
    if (username === undefined) {    // insteaded === we can also used (!username)
        console.log("Please Enter Username")
        return
    }
    return`${username} has logged in`
}

// console.log(userloggedin("atharva"));

//************************************************************************************** */

function calculatecartprize(...num) {
    return  num 
}

// console.log(calculatecartprize(122,300,500,5708))

const details = {
    id: 12234 ,
    price: 200 
}


function detailsof (anyobj) {
    return `the object is ${anyobj.id} and prize is ${anyobj.price}`
}

// console.log(detailsof(details))

let array = [100,200,300,400]

function leranarray(obj) {
    return obj
}

console.log(leranarray(array));