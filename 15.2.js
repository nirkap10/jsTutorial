function findSmallest(a, b, c){
    if (a > c && b > c){
    return c;
    } else if (a > b && c > b) {
    return b;
    } else {
    return a;
    }
    }
    findSmallest(52,66, 2);
    //1 10 2 4 
    //2 i used the vs code debugger
    //3 the function call was mispelled and the logic was wrong
    