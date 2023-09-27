const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    function canBeRead(arr){
        const canBeReadBooks = arr.filter(book => book.readingStatus === true)
        console.log(canBeReadBooks);
    }
    canBeRead(library);