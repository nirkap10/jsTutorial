//1.c 2.a b d 3.a b 4.a 5.c 6.a 7.b

//three differrent ways to declare values
let a1 = 5;
const a2 = '5';
var a3 = undefined;

//declare a variable and reassign a value to it
let b = 'basketball';
b = 'baseball';
console.log(b);

//create a variable and after that assign a string with its value being: He's got it!
let he;
he = "He's got it!";
console.log(he);

/*
1. create a variable and assign a value on how
much a restaurant bill is.
2. create a variable and assign a value on how
much tax they should pay.
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/
let bill = 1000;
let tax = 1.17;
let total = 'Your total bill is ' + tax*bill +'$';
console.log(total);

// Round the number 50.6 to its nearest integer
let round = 50.6;
round = Math.round(round);
console.log(round);

//Create a variable that is undefined
let uncertain = undefined;
console.log(typeof uncertain);