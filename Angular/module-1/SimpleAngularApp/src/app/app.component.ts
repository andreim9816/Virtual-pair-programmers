import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";
import {Page3Component} from "./page3/page3.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'SimpleAngularApp';

  // in app.component.html, take the component with the "footer" reference
  // used so I can access it programmatically
  @ViewChild('footer', {static: true})
  footerComponent: FooterComponent;

  @ViewChild('page2', {static: true})
  page2: Page2Component;

  startTime: string;

  currentPage = 1;

  updateLastAccess(): void {
    console.log('Previous last access was ' + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  incrementHitCounter(page): void {
    this.currentPage = page;
    if (page === 2) {
      this.page2.incrementHitCounter();
    }
  }

}
