// Singleton Object //

const tinder = new Object();
// console.log(tinder);

tinder.id = "123aaabc"
tinder.email = "xyz@gmail.com"
tinder.userloggedin = false

// // console.log(tinder);

// const insta = {
//     email: "atharva@gmaol.com",
//     fullname: {
//             username: {
//                 Firstname: "Athrva",
//                 lastname: "Amale"
//         }
//     }
// }

// console.log(insta.fullname.username.Firstname);

const obj1 = {1: "a", 2: "2"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({} ,obj1,obj2);
// console.log(obj3);

// const obj3 = {...obj1,...obj2}
// console.log(obj3);


// const tinderUsers = [
//   { id: 123,  email: "athatva@gmail.com", name: "atharva" },
//   { id: 456,  email: "priya@gmail.com",   name: "priya" },
//   { id: 1289, email: "rahul@gmail.com",   name: "rahul" },
//   { id: 175,  email: "sneha@gmail.com",   name: "sneha" },
// ];

// console.log(tinderUsers);
// console.log(Object.keys(tinderUsers));   // ["0", "1", "2", "3"]
// console.log(Object.values(tinderUsers)); // same array, since it's already an array


const users = [
    {
        id: 1,
        email: "ath@gmail.com"
    },
    {
        id: 1,
        email: "ath@gmail.com"
    }
]

// users.email[1] 

console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));

