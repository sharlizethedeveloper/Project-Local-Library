function findAccountById(accounts, id) {
  let findAccount = accounts.find((account) => {
    if (account.id === id) return account;
  })
  return findAccount;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
      const borrows = books[i].borrows;
      if (account.id === borrows[j].id){
        counter += 1;
      }
    }
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  let newArray = [];
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < authors.length; j++){
    const borrows = books[i].borrows;
    if (borrows[0].id === account.id){
      if (books[i].authorId === authors[j].id){
        books[i].author = authors[j];
        newArray.push(books[i]);
      }
    }
   }
  }
  return newArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
