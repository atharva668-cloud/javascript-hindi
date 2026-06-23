// scopes //

// let a = 500;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner", a)
}
// console.log(a);
// console.log(b);
// console.log(a);


//********************************************************************************* */



function one(){
    const username = "Atharva"
    
    function two() {
        const website = "Youtube"
        // console.log(username)
    }
    two()
    // console.log(website)
}

// one()


// +++++++++++++++++++++++++Another Example++++++++++++++++++++++++++++++++++++++++

if (true) {
    const username = "Atharva"

    if ( username === "Atharva") {
        const chanel = " Youtube"
        // console.log(username + chanel);
    }

    // console.log(chanel);
}

// console.log(username);


//++++++++++++++++++++== intersting ==++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(username(5));
function username(num) {
    return num + 1
}

// console.log(username(5));

// console.log(contain(6));

let contain = function (num) {
    return num + 1
}

// console.log(contain(9));
