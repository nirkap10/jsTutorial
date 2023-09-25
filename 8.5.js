const swapped = function(obj){
    const firstProp = obj[Object.keys(obj)[0]];
    console.log(firstProp);
    let lastkey = Object.keys(obj)[0];
    for(key in obj){
        if(key !== Object.keys(obj)[0]){
            obj[lastkey] = obj[key];
            lastkey = key;  
        }
    }
    obj[lastkey] = firstProp;
    return obj;
}
