// // syntax //
// switch (Key) {
//     case value:

//         break;

//     default:
//         break;    
// }                 

// const month = 4;
// switch(month) {
//     case 1:
//         console.log("jan");
//         break

//     case 2:
//         console.log("feb");
//         break;
        
//     case 3:
//         console.log("march");
//         break;
        
//     case 4:
//         console.log("April");
//         break;
        
//     case 5:
//         console.log("may");
//         break;
// }



// ============= truthy and falsy values ===============================

// falsy 
//false , 0 , -0 , bigint 0n , Null , "" , undefined , NaN

// truthy values
//  "0" , " " , "false" , {} , [] , function() {}  

const array = [];
if (array.length == 0) {
    // console.log("Array is empty");
} else {
    // console.log("not empty");
}

const obj = {}
if (Object.keys(obj.length == 0)) {
    // console.log("Object is empty");
}

// Nullish coalescing operator ??  

let val1 ;
// vel1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = null ??  20 ?? undefined;
val1 = 20 ?? undefined;


console.log(val1);     // this operator checks safety of program

// terniary operator  ?

let coffea = 100;
(coffea <= 120) ? console.log("Less then 120") : console.log("greater then 120");

