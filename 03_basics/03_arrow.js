const user = {
    username: "arijit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const chai = () => {
//     let username = "arijit"
//     console.log(this);
// }

// chai()

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "arijit"})


console.log(addTwo(3,4));

const myArray = [2, 5, 3, 7, 8]

//myArray.forEach( () => {})