// if

// const isUserLoggedIn = true
// const temperature = 41

// if ( 2 === "2") {
//     console.log("executed");
// }

// if (temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000

// // if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10

val2 = undefined ?? 15


console.log(val1);
console.log(val2);



//Ternary Operator

// codition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");