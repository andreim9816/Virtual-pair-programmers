import {EventEmitter, Injectable} from '@angular/core';
import {Book} from "./model/Book";

// this class can be instantiated and injected into other classes
@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Array<Book>;
  bookAddedEvent = new EventEmitter<Book>();
  bookDeleteEvent = new EventEmitter<Book>();

  constructor() {
    this.books = new Array<Book>();

    const book1 = new Book();
    book1.title = 'first book';
    book1.author = 'matt';
    book1.price = 3.99;

    const book2 = new Book();
    book2.title = 'second book';
    book2.author = 'james';
    book2.price = 5.99;

    const book3 = new Book();
    book3.title = 'third book';
    book3.author = 'laura';
    book3.price = 8.99;

    this.books.push(book1);
    this.books.push(book2);
    this.books.push(book3);

  }

  addBook(book: Book): void {
    if (book.author === 'james') {
      this.bookAddedEvent.error('Books by james are not allowed!');
    } else {
      this.books.push(book);
      this.bookAddedEvent.emit(book);
    }
  }

  deleteLastBook(): void {
    if (this.books.length !== 0) {
      const book = this.books.pop();
      this.bookDeleteEvent.emit(book);
    } else {
      this.bookDeleteEvent.error('There are no more books!');
    }
  }

}
