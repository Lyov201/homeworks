// function Library(name, books){
//     "use strict"
//     this.name = name;
//     this.books = [];
// }

// function Book(title, author, year) { 
//     "use strict"
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.isAvailable = true;
// }

// Book.prototype.getInfo = function() {
//     return `title: ${this.title}
// author: ${this.author}
// year: ${this.year}`
// }

// Book.prototype.borrowBook = function () {
//     if(this.isAvailable){
//         this.isAvailable = false;
//     }else {
//         return `The book is already borrowed`
//     }
// }
// Book.prototype.returnBook = function() {
//     if(!this.isAvailable){
//         this.isAvailable = true;
//     }else {
//         return `The book is available`
//     }
// }

// Book.prototype.matchesAuthor = function(authorName){
//     if(this.author.toLowerCase() === authorName.toLowerCase()) return true;
//     return false;
// }

// Book.prototype.matchesTitle = function(word) {
//     if(this.title.includes(word)) return true;
//     return false;
// }


// Library.prototype.addBook = function(book) {
//     if(!book.title) {
//         throw new Error("The book must have title ");
//     }
//     if (!book.author) {
//         throw new Error("The book must have author");
//     }
//     if(typeof book.year != "number") {
//         throw new Error("year must be a number");
//     }
//     this.books.push(book);
// }



// Library.prototype.removeBook = function(title) {

//     for(let i = 0; i < this.books.length; ++i){
//         if(this.books[i].title === title) {
//             this.books.splice(i,1);
//             return 0;
//         }
//     }
//     throw new Error ("There is no book whit that id");
    
// }



// Library.prototype.findBookByTitle = function (title) {
//     const book = this.books.find(book => book.title === title);
//     if (!book) {
//         throw new Error("Wrong title of book");
//     }
//     return book;
// };


// Library.prototype.findBooksByAuthor = function(authorName) {
//     let res = this.books.filter(element => element.author === authorName);
//     if(!res.length) {
//         throw new Error ("There is no book from that author");
//     }
//     return res;
// }


// Library.prototype.getAvailableBooks = function() {
//     let res = this.books.filter(element => element.isAvailable);
//     if(!res.length) {
//         throw new Error ("There is no available books")
//     }
//     return res;
// }

// Library.prototype.borrowBook = function(title) {
//     let book = this.books.find(element => element.title === title);
//     if(!book) {
//         throw new Error("There is no book with that title");
//     }
//     book.borrowBook();
// }



// Library.prototype.returnBook = function(title) {
//     let book = this.books.find(element => element.title === title);
//     if(!book) return `The book is not found`;
//     book.returnBook();
// }

// Library.prototype.showAllBooks = function () {
//     for(let i = 0; i<this.books.length; ++i){
//         console.log(this.books[i].getInfo());
//     }
// }

// Library.prototype.countBooks = function() {
//     return this.books.length ;
// }

// Library.prototype.countAvailableBooks = function() {
//     return this.getAvailableBooks().length ;    
// }

// Library.prototype.searchBooks = function(word){
//     let res = this.books.filter(element => element.title.includes(word));
//     if(!word) return `The word is not exist`;
//     return res;
// }

// Library.prototype.getOldestBook = function () {
//     if(this.books.length){
//         return this.books[0];
//     }
//     return null;
// }

// const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
// const book2 = new Book("1984", "George Orwell", 1949);
// const book3 = new Book("Animal Farm", "George Orwell", 1945);
// const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

// const library = new Library();

// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);
// library.addBook(book4);

// console.log("=== All books ===");
// library.showAllBooks();

// console.log("=== Count books ===");
// console.log(library.countBooks()); // 4


// console.log("=== Count available books ===");
// console.log(library.countAvailableBooks()); // 4

// console.log("=== Find by title ===");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Find by author ===");
// console.log(library.findBooksByAuthor("George Orwell"));

// console.log("=== Search books ===");
// console.log(library.searchBooks("Harry"));

// console.log("=== Borrow book ===");
// library.borrowBook("1984");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Borrow same book again ===");
// library.borrowBook("1984");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Return book ===");
// library.returnBook("1984");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Available books ===");
// console.log(library.getAvailableBooks());

// console.log("=== Oldest book ===");
// console.log(library.getOldestBook());

// console.log("=== Remove book ===");
// library.removeBook("The Hobbit");
// console.log(library.countBooks()); // 3

// console.log("=== Final books ===");
// library.showAllBooks();


class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true; 
    }

    getInfo() {
        return `title: ${this.title}
author: ${this.author}
year: ${this.year}`
    }

    borrowBook() {
        if(this.isAvailable){
            this.isAvailable = false;
        }else {
            return `The book is already borrowed`
        }
    }

    returnBook() {
        if(!this.isAvailable){
            this.isAvailable = true;
        }else {
            return `The book is available`
        }
    }

    matchesAuthor(authorName){
        if(this.author.toLowerCase() === authorName.toLowerCase()) return true;
        return false;
    }

    matchesTitle(word) {
        if(this.title.includes(word)) return true;
        return false;
    }
}

class Library{
    constructor(name , books){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(!book.title) {
            throw new Error("The book must have title ");
        }
        if (!book.author) {
            throw new Error("The book must have author");
        }
        if(typeof book.year != "number") {
            throw new Error("year must be a number");
        }
        this.books.push(book);
    }

    removeBook(title) {
        for(let i = 0; i < this.books.length; ++i){
            if(this.books[i].title === title) {
                this.books.splice(i,1);
                return 0;
            }
        }
        throw new Error ("There is no book whit that id");
    }

    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        if (!book) {
            throw new Error("Wrong title of book");
        }
        return book;
    }

    findBooksByAuthor(authorName) {
        let res = this.books.filter(element => element.author === authorName);
        if(!res.length) {
            throw new Error ("There is no book from that author");
        }
        return res;
    }

    getAvailableBooks() {
        let res = this.books.filter(element => element.isAvailable);
        if(!res.length) {
            throw new Error ("There is no available books")
        }
        return res;
    }

    borrowBook(title) {
        let book = this.books.find(element => element.title === title);
        if(!book) {
            throw new Error("There is no book with that title");
        }
        book.borrowBook();
    }

    returnBook(title) {
        let book = this.books.find(element => element.title === title);
        if(!book) return `The book is not found`;
        book.returnBook();
    }

    showAllBooks() {
        const allBooks = [];
        for(let i = 0; i<this.books.length; ++i){
            allBooks.push(this.books[i].getInfo());
        }
        return allBooks;
    }

    countBooks() {
        return this.books.length ;
    }

    countAvailableBooks() {
        return this.getAvailableBooks().length ;    
    }

    searchBooks(word){
        let res = this.books.filter(element => element.title.includes(word));
        if(!word) return `The word is not exist`;
        return res;
    }

    getOldestBook() {
        if (!this.books.length) return null;

        let oldest = this.books[0];

        for (let i = 1; i < this.books.length; i++) {
            if (this.books[i].year < oldest.year) {
                oldest = this.books[i];
            }
        }

        return oldest;
    }
}


const library = new Library();

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Count books ===");
console.log(library.countBooks()); // 4


console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();
