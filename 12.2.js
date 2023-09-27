const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }
    //1
    function getCandy(candyStore, id){
        return candyStore.candies.find( candy => candy.id === id)
        }

console.log(getCandy(candyStore,"5hd7y"));
    //2    
    function getPrice(candyStore, id){
        return candyStore.candies.find( candy => candy.id === id).price
        }

        console.log(getPrice(candyStore,"5hd7y"));
    //3    
    function addCandy(candyStore, id, name, price){
        const candy = {
            name: name,
            id: id,
            price: price,
            amount: 1
            }
            candyStore.candies.push(candy);
            }
    addCandy(candyStore, 'kjh', 'kjadhw', 3); 
    console.log(candyStore);        

    //4

    function buy(candyStore, id){
        const candyPrice = candyStore.candies.find( candy => {
            if(candy.id === id){
                candy.amount--;
                return candy.price;
            }
        })   
        candyStore.cashRegister = candyStore.cashRegister + candyPrice.price;
    }
    buy(candyStore,"5hd7y");
    console.log(candyStore);