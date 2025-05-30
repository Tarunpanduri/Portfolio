
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activePage = 'about'; // Default page

  setActivePage(page: string) {
    this.activePage = page;
    window.scrollTo(0, 0);
  }
}
