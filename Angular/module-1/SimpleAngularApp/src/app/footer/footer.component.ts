import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //@Input to allow a parent to set a child property in HTML
  @Input()
  lastAccessed = '';

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
  }

  addBook(): void {
    const book = new Book();
    book.title = 'another book';
    book.author = 'matt';
    book.price = 12.99;

    this.dataService.addBook(book);
  }

  addBook2(): void {
    const book = new Book();
    book.title = 'another book james';
    book.author = 'james';
    book.price = 15.99;

    this.dataService.addBook(book);
  }
}
