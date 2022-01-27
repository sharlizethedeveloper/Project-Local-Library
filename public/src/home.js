function getTotalBooksCount(books) {
  //.reduce method used
  let result = books.reduce((book) => { return book + 1; }, 0)
  return result;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++){
    // ternary operator used
    (books[i].borrows[0].returned === false) ? counter += 1 : counter += 0;
  }
  return counter;
}

// helper function
function makeFive(array) {
  if (array.length > 5){
    return array.slice(0, 5);
  }
}

/*
books is an array of objects
access the genre key of each object
return an array of 5< objects with the key being the genre and the value being how many books contain that genre
create a counter to determine how many books are in a genre
.sort method highest to lowest number of books with each genre
*/  

function getMostCommonGenres(books) {
  let newArray = [];
  let counter = 0;
  for ( let i=0; i < books.length; i++) {
    let genre = books[i].genre;
    for ( let j=1; j < books.length; j++) {
      if ( genre === books[j].genre) {
        counter +=1;
        }
      }
    let temp = newArray.find(item => item.name == genre)
    if (temp === undefined || newArray.length == 0) {
      let item = {}
      item["name"] = genre;
      item["count"] = 1;
      newArray.push(item)
    } else {
      temp.count+=1
    }
   counter = 0;
    }
    //sort 
    newArray.sort((a, b) => a.count > b.count ? -1:1);
    // return first 5
    return makeFive(newArray);
  }


function getMostPopularBooks(books) {
  let newArray = [];
  let counter = 0;
  for (let i = 0; i < books.length; i++){
    counter = books[i].borrows.length;
    for (let j = 1; j < books.length; j++){
      if (newArray.length < 5){
      const borrow = books[j].borrows;
      if (borrow.length > counter){
        counter = borrow.length;
        let item = {};
        item['name'] = books[j].title;
        item['count'] = borrow.length;
        newArray.push(item);
        counter = 0;
      }
     }
    }
  }
  return newArray.sort((a, b) => b.count - a.count);
}

function getMostPopularAuthors(books, authors) {
  let newArray = [];
  let item = {};
  let counter = 0;
  for (let i = 0; i < authors.length; i++){
    item["name"] = authors[i].name.first + " " + authors[i].name.last;
    for (let j = 0; j < books.length; j++){
      if (authors[i].id === books[j].authorId){
        counter += books[j].borrows.length;
      }
    }
  item["count"] = counter;
  newArray.push(item);
  counter = 0;
  item = {};
  }
  return makeFive(newArray.sort((a, b) => b.count - a.count));
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
