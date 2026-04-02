class Book {
    #title;
    #author;
    #year;
    #isAvailable;

    constructor(title, author, year){
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#isAvailable = true;
    }

    get title () {
        return this.#title;
    }
    set title(value) {
        if (value === "") {
            throw new Error ("The title must not be an empty string");
        } else {
            this.#title = value;
        }
    }

    get author() {
        return this.#author;
    }
    
    set author(value) {
        if(value === "") {
            throw new Error("The author must not be an empty string");
        } else {
            this.#author = value;
        }
    }

    get year() {
        return this.#year;
    }
    set year(value) {
        if(value < 0) {
            throw new Error("Year must be a positive number");
        } else {
            this.#year = value;
        }
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    borrowBook(){
        if(this.#isAvailable) {
            this.#isAvailable = false;
        } else {
            return "The book is already borrwed";
        }
    }

    returnBook(){
        if(!this.#isAvailable) {
            this.#isAvailable = true;
        } else {
            return "Book is already available";
        }
    }

    matchesTitle(word) {
        if(this.#title.includes(word)) {
            return true;
        } else {
            return false;
        }
    }

    getInfo() {
        return `title is: ${this.#title}
        author is: ${this.#author}
        The book was written in ${this.#year}
        isAvailable: ${this.#isAvailable}`
    }

}

class Reader {
    #name;
    #borrowedBooks;

    constructor(name) {
        this.#name = name;
        this.#borrowedBooks = [];
    }

    get name() {
        return this.#name;
    }
    set name(value){
        if(value === "") {
            throw new Error("You must write name");
        } else {
            this.#name = value;
        }
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }

    get borrowedBooksCount(){
        return this.#borrowedBooks.length;
    }
    takeBook(book) {
        if(book instanceof Book){
            if(book.isAvailable) {
                book.borrowBook();
                this.#borrowedBooks.push(book);
            }   else {
                return `The book is not available`;
            }
        } else{
             return  "Wrong input"
        }
    }

    giveBackBook(book) {
        if(this.#borrowedBooks.includes(book)){
            this.#borrowedBooks = this.#borrowedBooks.filter(b => b !== book);
            book.returnBook();
        } else {
            return "You dont have that book";
        }
    }

    hasBook(book) {
        if(this.#borrowedBooks.includes(book)) return true;
        return false;
    }

    showBorrowedBooks() {
        return this.#borrowedBooks.map( b => b.title);
    }

    getInfo() {
        return `${this.#name} has ${this.#borrowedBooks.length} books`
    }

}

class Library {
    #name;
    #books = [];
    #readers = [];

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        if(value != "") {
            throw new Error("Name must not be empty");
        }
        else {
            this.#name = value;
        }
    }
    get books(){
        return this.#books;
    }
    get readers() {
        return this.#readers;
    }

    addBook(book){
        if(book instanceof Book){
            if(book.title === "") throw new Error("Book must have title");
            if(book.author === "") throw new Error("Book must have author name");
            if(typeof book.year !== "number") throw new Error ("year must be a number");

            this.#books.push(book);
        } else return "This is not book";
    }

    registerReader(reader){
        if(reader instanceof Reader) {
            if(reader.name === "") return;
            this.#readers.push(reader);
        } else throw new Error("This not a reader");
    }

    findBookByTitle(title) {
        let book = this.#books.find(element => element.matchesTitle());
        if(!book) {
            return null;
        }
        return book;
    }

    findBooksByAuthor(authorName){
        let arr = this.#books.filter(b => b.author = authorName);
        return arr;
    }
    giveBookToReader(title, reader) {
        const book = this.findBookByTitle(title);
        if(!book) return "Book was not found";
        reader.takeBook(book);
    }

    acceptBookFromReader(title, reader){
        let book = this.findBookByTitle(title);
        if(!book) return "Book was not found";
        reader. giveBackBook(book);
    }

    showAvailableBooks() {
        if(this.#books.length) {
            return this.#books.filter(b => b.isAvailable);
        }
    }

    showAllBooks(){
        return this.#books.map(b => b.getInfo());
    }

    getLibraryInfo(){
        return `${this.#name} , ${this.#books.length} books, ${this.#readers.length} readers`;
    }

}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
