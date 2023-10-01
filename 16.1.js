// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//     return 2;
//     }
//     }
//     funcA();
    //a wont be logged because its defined only later but it wont be an error as well because its a var
    //foo will log its only value 2



//     var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName();
// console.log(test);
//the first log will work
//the second one didnt because when test was defined the call to the getfullname function was without brackets



// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//     }
//     funcB();
//     console.log(typeof a);
//     console.log(typeof b);
//     //a is dead outside the function
//     //b i dont understand




//     function funcC() {
//         console.log("1");
//         }
//         funcC();
//         function funcC() {
//         console.log("2");
//         }
//         funcC();
        //the function will log 2 twice




        // function funcD1() {
        //     d = 1;
        //     }
        //     funcD1();
        //     console.log(d);
        //     function funcD2() {
        //     var e = 1;
        //     }
        //     funcD2();
        //     console.log(e);
            //d will be called because it has been declared without var/let/const so its become global
            //e will return an error because if you declare a var within a function it become scope block
            
    
    


            function funcE() {
                console.log("Value of f in local scope: ", f);
                }
                console.log("Value of f in global scope: ", f);
                var f = 1;
                funcE();
                //global scope will be undefined local scope will be just fine ;)