// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry
const arr1 = [1,2,3,4,5,6,7];
//1
const doubleValues = function(arr){
    return arr.map(num => {return num*2});
}
const arr2 = doubleValues(arr1);
console.log(arr2);

//2
const onlyEvenValues = function(arr){
    let newArr = arr.map(num =>{
        if(num%2 === 0){
            return num
        }
    })
    for(let i=0; i<newArr.length; i++){
        if(newArr[i] === undefined){
            newArr.splice(i,1);
            i--;
        }
    }
    return newArr;
}
const arr3 = onlyEvenValues(arr1);
console.log(arr3);

//3
const showFirstAndLast = function(arr){
    let newArr = arr.filter
}
