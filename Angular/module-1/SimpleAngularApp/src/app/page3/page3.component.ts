import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.subscription = this.dataService.bookDeleteEvent.subscribe(book => alert(`The book called ${book.title} was deleted`),
      err => {
        alert(`No books were deleted - the error was ` + err)
      });
  }

  deleteLastBook(): void {
    this.dataService.deleteLastBook();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
