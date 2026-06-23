// singleton//


// object literals

const mysymbol = Symbol("Key1")  // to store Symbol in object syntax is different [] //

const jsuser = {
    name: "Atharva",
    "full name" : "Atharva amale",
    [mysymbol] : "key1",
    age: 18,
    location: "Pune",
    email:"atharsvd@gmail.com",
    isloggedin: false,
    lastloogedin : ["Monday","Saturday"]

}

console.log(jsuser.email);
console.log(jsuser["location"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysymbol]);


// Object.freeze(jsuser);
jsuser.email = "atharva889@gmail.com"
console.log(jsuser.email);

jsuser.greeting = function() {
    console.log(`Welcome Jsuser.. ${this.name} `)
}

console.log(jsuser.greeting())