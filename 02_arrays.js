const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["Superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const array1 = marvel_heros.concat(dc_heros);
// console.log(array1);


// another method most used //

// const array2 = [...dc_heros,...marvel_heros]
// console.log(array2);

// const array3 = [1,2,3,[4,5], 7,[6,7,[8,9]]]
// const main_array = array3.flat(Infinity);
// console.log(main_array);



// console.log(Array.isArray("Atharva"));
// console.log(Array.from("Atharva"));
// console.log(Array.from({name:"Atharva"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));