

const book1 = {
 name: 'baba',
 author: 'MrBaba',
 year : 1994   
}
const book2 = {
    name: 'lala',
    author:'MrLala',
    year:   2000
   }
const bookUtils = {
    getFirstPublished : function (firstBook,secondBook) {
        if(firstBook.year < secondBook.year){
            return firstBook
        } else{
            return secondBook
        }
    },
    setNewEdition : function (book,year){
        book.latestEdition = year        
    },
    setLanguage : function (book,language){
        book.language = language;        
    },
    setTranslator : function (book, translator, language){
        book.translation = {
            translator : translator,
            language   : language
        }
    },          
    setPublisher :  function (book, name, location){
        book.publisher = {
            name : name,
            location   : location
        };        
    },
    isSamePublisher : function (book1,book2){
        if(book1.publisher.name === book2.publisher.name && book1.publisher.location===book2.publisher.location){
            return true;
        } else return true;
    }
}
const book3 = bookUtils.getFirstPublished(book1,book2);
console.log((book3===book1));
bookUtils.setNewEdition(book1, 2017);
console.log(book1.latestEdition);
bookUtils.setPublisher(book1, 'nir', 'rehovot');
bookUtils.setPublisher(book2, 'nir', 'rehovot');
console.log(bookUtils.isSamePublisher(book1,book2));