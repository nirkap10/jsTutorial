/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/
// From function declarations to explicit and implicit
//return functions (one of each).
welcome = () => {return 'Welcome to Appleseeds Bootcamp!';}
welcome = () => 'Welcome to Appleseeds Bootcamp!';

const power = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
const power = (a) => Math.pow(a,2);

function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
// From function expressions to IIFE functions.
//(function () {
  // …
//})();
(function (a){
    return Math.sqrt(a);
})();
(function (a,b){
    return Math.random() * (a-b) + b;
})();

const squareRoot = a => Math.sqrt(a);
const randomNumbers = (a, b) => Math.random() * (a - b) + b;