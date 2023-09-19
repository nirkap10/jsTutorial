function duplicateEraser(n){
    let counter = 0;
    while(counter < n.length-1){
        while(n.slice(counter+1).indexOf(n[counter]) != -1){
            n.splice(n.slice(counter+1).indexOf(n[counter])+counter+1,1);
        }
        counter++;
    }
}
const a1 = [1,4,5,8,5,7,7,3,4,1,8,7];
// a1.splice(3,3);
// console.log(a1);
duplicateEraser(a1);
console.log(a1);
