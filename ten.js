//  for of loop and for in loop //  this are for array

// for (const element of object) {
    
// }   syntax


let myarray = [1,2,3,4,5,6]
for (const item of myarray) {
    // console.log(item);
}

const greeting = "Hellow World";
for (const element of greeting) {
    // console.log(element);
}
 // Map //

let map = new Map ()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")
map.set('AUS',"AUSTRALIA")
map.set('AUS',"AUSTRALIA")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":-",value);
}

// const myobj = {
//     "game1" : "NFS",
//     "game2" : "GTA",
// }
//  for (const element of myobj) {
    // console.log(element);
// }           Object is not itreable    


// for in loop for object  as well as for Array also work// 

const myobj = {
    name1:"Atharva",
    name2:"Athex",
    name3:"Santosh",
    name4:"Yashraj"
}

for (const key in myobj) {
    // console.log(`key is ${key} and object is ${myobj[key]}`);
}

let array = [1,2,3,4,5,6,7];
for (const key in array) {
    console.log(key,array[key])
    
}