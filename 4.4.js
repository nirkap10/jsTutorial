function boom(n){
    while(n>0){
        if((n%7)==0 && String(n).includes('7')){
           console.log('BOOM-BOOM')
        }
         else if((n%7)==0){
            console.log('BOOM')
        } else{
            console.log(n)
        }
        n--;
    }
}
boom(77);
