    
const book = {
    authorName : 'nir kaplan',
    pages      : 500,
    publishingYear : 2012,
    bookName : 'the incredible tale of yellow short nose dog' 
}
//‘The book <book name> was written by <author name> in the year <publishing year>’
function getData(bookObj){
    const bookobj1 = {
    authorName : bookObj.authorName,
    bookName : bookObj.bookName,
    publishingYear : bookObj.publishingYear,
    };
    return 'The book ' + bookobj1.bookName + ' was written by ' + bookobj1.authorName + ' in the year ' + bookobj1.publishingYear
    
}
const str = getData(book);
console.log(str);

