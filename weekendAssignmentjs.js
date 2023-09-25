
//1.1 yes or no
function bool(bool1) {
   return bool1 ? true : false;
    }

    //2.1
    const sumOf = function(arr){
        const lowArr = [];
        arr[0] >= arr[1] ? lowArr.splice(0,0,arr[1],arr[0]) : lowArr.splice(0,0,arr[0],arr[1]);
        console.log(lowArr);
        for(i=2 ; i<arr.length; i++){
            if(arr[i]<lowArr[1]){
                if(arr[i]<lowArr[0]){
                    lowArr.unshift(arr[i]);
                    lowArr.pop();
                } else{
                    lowArr[1] = arr[i];
                }
            }
            console.log(lowArr);
        }
        return (lowArr[0]+lowArr[1]);
    }

   // 2.3
   const perfectSquare = function(num){
    if(Math.sqrt(num)%1 === 0){
        return (Math.pow(Math.sqrt(num)+1, 2));
    } else return -1;
   }

   // 2.4
   const unique = function(arr){
    const uniqueNum = {};
    for(i=0; i < arr.length ; i++){
        if(arr[i] in uniqueNum){
            uniqueNum[arr[i]] += 1; 
        } else {
            uniqueNum[arr[i]] = 1;
        }
    }
    for (const property in uniqueNum) {
        if(uniqueNum[property]===1){
            return property;
        }
      }
   }

   //2.5
   const summation = function(num){
    let sum = 0;
    while(num > 0){
        sum = sum + num;
        num--;
    }
    return sum
   }
   
   //2.6
   const centuryFromYear = function(year){
    return Math.ceil(year/100);
}

    //2.7
    const basicOp = function(char,num1,num2){
        let operate = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '*': function (x, y) { return x * y },
            '/': function (x, y) { return x / y } 
        }
        
       return operate[char](num1, num2);
    }


//4.1
const fib = function(n){
    if(n<=2){
        return n-1 ;
    } else{
        return fib(n-1) + fib(n-2);
    }
}

//5.1
const trim = function(str){
    str = str.slice(0, -1);
    str = str.slice(1);
    return str
}

//5.2
const repeatString = function(num, str){
    let newStr = str;
    while(num>1){
        newStr = newStr.concat("", str);
        num--;
    }
    return newStr
}

//5.3
function toCamelCase(str) {
    let camel = str;
    if(str.includes('-')){
         camel = str.split('-');        
    } else {
         camel = str.split('_');
    }
    const firstWord = [camel[0]];
    rest = camel.slice(1).map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1);
        return firstLetter + rest;
    });
    camel = firstWord.concat(rest);
    camel = camel.join('');
    return camel;
  }


//5.5
const abbreviate = function(str) {
    const intials = str
      .split(' ')
      .map(letters => letters.charAt(0))
      .join('.')
      .toUpperCase();
  
    return initials;
  }

  //5.6 im using function of 5.2
  const mask = function(str) {
    if(str.length<=4){
        return str
    }
    let num = str.length;
    let numberSign = repeatString(num,'#');
    let last4 = str.slice(-4);
    return numberSign.concat(last4);
  }

  //5.7
  const shortestWord = function(str) {
    const lengths = str
    .split(' ')
    .map(word => word.length);
    let num = lengths[0];
    for(i=1; i<lengths.length; i++){
        num>lengths[i] ? num = lengths[i] : null ;
    }
    return num;
}


//6.1
const accum = function(str) {
    let chars = str.split('');
    chars = chars.map((word, index) => {
        const rest = repeatString(index, word);
        const firstLetter = word.toUpperCase();
        return firstLetter + rest;
    })
    chars[0] = chars[0].charAt(0);
    chars = chars.join('-');
    return chars;
}

//6.2
const countingDuplicates = function(str) {
    let strToLowerCase = str.toLowerCase();
    let duplicate = {};
    let chars = strToLowerCase.split('');
    chars.map((word) => {
        if(duplicate[word]!= undefined){
            duplicate[word] = duplicate[word] + 1;
        } else {
            duplicate[word] = 1;
        }
    })
    let num = 0;
    for(key in duplicate){
        if(duplicate[key] > 1){
            num++;
        }
    }
    return num;
}

//6.4 using 6.3 method
const isIsogram = function(str) {
    let bool;
    countingDuplicates(str) === 0 ? bool = true : bool = false;
    return bool;
}
