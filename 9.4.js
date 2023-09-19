const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Noodle", "Ice-cream", "Pasta", "Olives", "Cucumber","Meat"];
let bool = true;
    for(let i = 0; bool===true && i < food1.length; i++){
        bool = false;
        
        for(let c = 0; c < food2.length; c++){
            if(food1[i] === food2[c]){
            bool=true;
            console.log(bool);
            break;
            }
        }
    }
console.log(bool);