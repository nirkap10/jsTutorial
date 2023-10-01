// var b = 1;
// function someFunction(number) {
// function otherFunction(input) {
// return b;
// }
// b = 5;
// return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
// //result will hold the value of 5


// var a = 1;
// function b2() {
// a = 10;
// return;
// function a() { }
// }
// b2();
// console.log(a);
// //not really sure i believe that somehow the function a() is killing the new value transffered to a earilier and than its all die outside the function



let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
//by the time log will be called the loop will be end and i value will be 3 so it will print 3 three times