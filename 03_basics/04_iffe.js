// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IFFE)

(function chai(){
    // named IFFE
    console.log('DB CONNECTED');
})();

// ()()

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )('arijit');


