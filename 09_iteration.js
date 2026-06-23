// iterations //

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }  syntax

for (let i = 0; i <=10; i++) {
    if (i == 5) {
        // console.log("5 detected")
    }
    // console.log(i);
    
}


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i ,'*' , j , '=', i*j );
        
//     }
    
// }

for (let i = 0; i <=10; i++) {
    if (i == 5) {
        console.log("5 detected")
        continue;
    }
    // console.log(i);
    

}                  // continue //


for (let i = 0; i <=10; i++) {
    if (i == 5) {
        console.log("5 detected")
        break;
    }
    // console.log(i);
    

}                 // break //



//===================================================================================================


// while loop , do while loop

// while (condition) {
    
// }      syntax
// let i = 1
// while (i < 10) {
//     console.log(`value of index is ${i}`);
//     i ++ ;

// }


// let array = ["Pune","Mumbai", "delhi","Noida"];
// let  i = 0;
// while(i < array.length) {
//     console.log(`Array has ${array[i]} cities`)
//     i = i + 1 ;
// }

//+++++++++++++++++++++++++ do while ++++++++++++++++++++++++++++++++++++++++                  //


// do {
    
// } while (condition);  syntax

let i = 1;
do {
    console.log(`Score is ${i}`)
    i ++ ;
} while (i < 11);
