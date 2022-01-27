function findAuthorById(authors, id) {
  // .filter method used
  let findAuthor = authors.filter(author => id === author.id
  );
  return findAuthor[0];
}

function findBookById(books, id) {
  // .find method used
  let findBook = books.find((book) => {
    if (id === book.id) return book
  });
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  let arrayA = [];
  let arrayB = [];
  let arrayC = [];
  // .map method used
  books.map((book) => {
    if (book.borrows[0].returned === false){
      arrayA.push(book);
    } else {
      arrayB.push(book);
    }
  });
  arrayC.push(arrayA, arrayB);
  return arrayC;
}

function getBorrowersForBook(book, accounts) {
  let newArray = [];
  // object destructuring below
  const {borrows} = book;
  for (let i = 0; i < accounts.length; i++){
    const account = accounts[i];
    if (newArray.length < 10){
      for (let j = 0; j < borrows.length; j++){
        if (borrows[j].id === account.id){
          account.returned = borrows[j].returned;
          newArray.push(account);
        }
      }
    }
  }
  return newArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
