// Immediatly Invoked function expression //

function athex () {
    console.log("DB CONNECTED");
}

// athex();      normal method / function

(function athex () {
    console.log("DB CONNECTED to ");
}) ();    //    iife function

((name) =>  {
    console.log(`DB CONECTEDED TO ${name}`);
}) ("athex");
