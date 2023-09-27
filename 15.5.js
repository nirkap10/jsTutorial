function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3],[5,66,23]);
    //1 2 10
    //2 vs debugging
    //3 there was a missing comma in the argument of the functioin calling and trying to change a constant variable