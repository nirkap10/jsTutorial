const array = ["hello", "good Day", "your welcome", "hotdog", "hamburgers"];
const count = function(arr) {
    const obj = {};
    for(i=0; i<arr.length; i++){
        const strArr = arr[i].split();
        for(c=0; c)
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