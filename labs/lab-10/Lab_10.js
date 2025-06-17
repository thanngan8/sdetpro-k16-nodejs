class Book {
    constructor(isbn, title, author, year) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class BookManagement {
    constructor() {
        this.books = [];
    }

    addBook(isbn, title, author, year) {
        const newBook = new Book(isbn, title, author, year);
        this.books.push(newBook);
        console.log(`The book is saved into DB with info: Book {ISBN: ${isbn}, Title: ${title}, Author: ${author}, Year: ${year}}`);
    }

    findBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            console.log(`Book {ISBN: ${book.isbn}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}}`);
        } else {
            console.log(`Book with ISBN ${isbn} is not found`);
        }
    }

    updateBook(isbn, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            book.title = newTitle;
            book.author = newAuthor;
            book.year = newYear;
            console.log(`The book is now updated with new content: Book {ISBN: ${isbn}, Title: ${newTitle}, Author: ${newAuthor}, Year: ${newYear}}`);
        } else {
            console.log(`Book with ISBN ${isbn} is not found`);
        }
    }

    deleteBook(isbn) {
        const index = this.books.findIndex(b => b.isbn === isbn);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book with ISBN ${isbn} is deleted`);
        } else {
            console.log(`Book with ISBN ${isbn} is not found`);
        }
    }

    printBookList() {
        this.books.forEach((book, index) => {
            console.log(`Book ${index + 1}: ${book.title}`);
            console.log(`    ISBN: ${book.isbn}`);
            console.log(`    Author: ${book.author}`);
            console.log(`    Year: ${book.year}`);
        });
    }
}

const manager = new BookManagement();
manager.addBook('1234', 'Cuon theo chieu gio', 'Teo', 2022);
manager.addBook('12345', 'Tieng chim hot trong bui man gai', 'Ti', 2021);
manager.printBookList();
manager.findBook('1234');
manager.updateBook('1234', 'Updated Title', 'Updated Author', 2023);
manager.deleteBook('12345');
manager.printBookList();
