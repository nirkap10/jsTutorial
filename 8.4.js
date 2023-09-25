const array = ["hello", "good Day", "your welcome", "hotdog", "hamburgers"];
const count = function(arr) {
    const obj = {};
    for(i=0; i<arr.length; i++){
        const strArr = arr[i].split();
        if(obj.arr[i] === undefined){
            obj.arr[i] = 1;
        } else{
            obj.arr[i] = obj.arr[i] + 1;
        }
    }
    return obj;
}
// console.log(count(array))
console.log
const lettterCount = function(arr) {
    let toString = arr.join('');
    console.log(toString);
    toString = toString.toLowerCase();
    toString = toString.replaceAll(' ','');
    let duplicate = {};
    let chars = toString.split('');
    console.log(chars);
    chars.map((word) => {
        if(duplicate[word]!= undefined){
            duplicate[word] = duplicate[word] + 1;
        } else {
            duplicate[word] = 1;
        }
    })
return duplicate;
}
