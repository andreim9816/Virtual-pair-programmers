import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  count = 1;
  pageName = 'Page ' + this.count;
  books: Array<Book>;
  numberOfBooksWrittenByMatt: number;
  subscriptionAdd: Subscription;
  subscriptionDelete: Subscription;

  constructor(public dataService: DataService) {
    // runs whenever an object is created
    // gets called first
    console.log('CONSTRUCTOR');
  }

  ngOnDestroy(): void {
    // avoids memory leaks. We should be unsubscribing almost anytime??
    this.subscriptionAdd.unsubscribe();
    this.subscriptionDelete.unsubscribe();
  }

  ngOnInit(): void {
    // runs after the class has been instantiated
    // all properties and dependencies on this class exist by the time ngOnInit runs
    // gets called after constructor

    console.log('On init');

    setInterval(() => {
      this.count++;
      this.pageName = 'Page ' + this.count;
    }, 1000);

    this.books = this.dataService.books;
    this.numberOfBooksWrittenByMatt = this.books.filter(it => it.author === 'matt').length;
    this.subscriptionAdd = this.dataService.bookAddedEvent.subscribe(newBook => {
      if (newBook.author === 'matt') {
        this.numberOfBooksWrittenByMatt++;
      }
    }, err => {
      console.log(err)
    }, complete => {

    });

    this.subscriptionDelete = this.dataService.bookDeleteEvent.subscribe(book => {
      if (book.author === 'matt') {
        this.numberOfBooksWrittenByMatt--;
      }
    }, err => {
      // !! when an error occurs, our subscription is over
      console.log(err)
    }, () => {
      //complete event
    });
  }

  onButtonClick(): void {
    alert('Hello! The date today is ' + new Date());
  }
}
