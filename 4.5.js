function leapyear(n){
    if(((n%4) == 0 && (n%100) != 0) || ((n%4) == 0 && (n%400) == 0)){
        console.log('it is indeed a leap year');
    } else{
        console.log('This is not a leap year');
    }
}
leapyear(2003);
leapyear(2012);
leapyear(2100);
leapyear(2400);