import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() pageChange = new EventEmitter<string>();

  pages = ['about', 'resume', 'portfolio', 'contact'];
  activeIndex = 0;

  onNavClick(index: number) {
    this.activeIndex = index;
    const selectedPage = this.pages[index];
    this.pageChange.emit(selectedPage);
  }
}
