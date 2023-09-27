// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function


//1
function isString(str, callback){
    if(typeof str === 'string'){
        callback(str);
        }
}
function logIt(str){
    console.log(str);
}
isString('hello world!', logIt);

//2
function firstWordUpperCase(str, callback){
    str = str[0].toUpperCase() + str.slice(1);
    return callback(str);   
}
function dashesBetween(str){
    str = str.replaceAll(' ','-');
    return str;
}
const str = 'asafoio ojhfowi oijo';
console.log(firstWordUpperCase(str, dashesBetween));

//4
function hey(name, callback){
    name = name.toUpperCase();
    callback(name);   
}
function hello(name){
    console.log( 'hello ' + `${name}`);
}
hey('Nir',hello);