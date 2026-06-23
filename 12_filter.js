// filter //
// const array = [1,2,3,4,5,6,7,8,9,10];
// const obj = array.filter((num) => {
//     return num  })
// // console.log(obj);


// const orgarray = []
// array.forEach((num) => {
//     if (num > 4) {
//         orgarray.push(num);
//     }
// })

// //  console.log(orgarray);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


// const user = books.filter((bk) => (  bk.publish >= 1995 && bk.genre === "History"));
// // console.log(user);


// map // 

let val1 = [1,2,3,4,5,6,7,8,9,10];
// const val2 = val1.map((num) => (num + 10))
// console.log(val2);

//chaining //

// let lst = [1,2,3,4,5,6,7,8,9,10] ;
// const newlst = lst
//                 .map((num) => (num * 10))
//                 .map((num) => (num + 1))
//                 .filter((num) =>(num > 40)); 
// console.log(newlst);        


// reduce function // 

// const num = [1,2,3];
// const lst = num.reduce((acc,crvalue) => {
//     console.log(`value of accumulator ${acc} and currentvalue ${crvalue}`);
//     return acc + crvalue
    
// },0)
// console.log(lst);

const shoppingdetail = [
    {
        itemname: "python",
        itemprize: 999,
    }, 
    {
        itemname: "javascript",
        itemprize: 4999,
    },
    {
        itemname: "AIML",
        itemprize: 19999,
    },
    {
        itemname: "Data Scitist",
        itemprize: 14999,
    }
]

const totalprize = shoppingdetail.reduce((acc, curvl) => (acc + curvl.itemprize),0);
console.log(totalprize);