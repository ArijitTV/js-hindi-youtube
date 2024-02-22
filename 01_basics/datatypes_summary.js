// Primitive Datatypes (Call by Value)
// 7 types: String,Number,BigInt, Boolean, null, undefined, Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Non-primitive Datatypes (Call by Reference)
// 3 types: Array,Objects,Functions

const heros = ["shaktiman", "nagraaj", "doga"];  //Array

let myObj = {
    name: "arijit",
    age: 22
};    //Object

const myFunction = function(){
    console.log("Hello World");
};     //Function

