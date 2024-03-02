// singleton
// Object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Arijit",
    "full name": "Arijit Bhattacharjee",
    [mySym]: "myKey1",      //symbol
    age: "22",
    location: "Jaipur",
    email: "arijit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "arijit@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "arijit@microsoft.com"

//********************************************** FUNCTIONS ************************************************** */

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());