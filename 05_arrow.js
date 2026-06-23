const website = {
    username: "atharva",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} Welcome to website..`);
        // console.log(this)
    }
}

// console.log(this);
// website.username = "Sam";
// website.welcomemessage(this);


function practice () {
    const username = "atharva"
    console.log(this.username)

}

// practice()

let arrow = () => {
    let username = "Sam"
    console.log(this.username)
}

// arrow()

// const athex = (num1,num2) => {
//     return num1 + num2 
// }

// console.log(athex(4,7));

const addtwo = () => ({username: "athex"})
console.log(addtwo());