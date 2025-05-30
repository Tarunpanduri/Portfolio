import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChildren('navLink') navLinks!: QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChildren('page') pages!: QueryList<ElementRef<HTMLElement>>;

  // The currently active link
  activeIndex = 0;

  ngAfterViewInit() {
    this.setActivePage(this.activeIndex); // Activate the first page by default
  }

  onNavClick(index: number) {
    this.setActivePage(index);
    window.scrollTo(0, 0); // scroll to top
  }

  private setActivePage(index: number) {
    this.activeIndex = index;

    this.pages.forEach((pageRef, i) => {
      const page = pageRef.nativeElement;
      const link = this.navLinks.get(i)?.nativeElement;

      if (i === index) {
        page.classList.add('active');
        link?.classList.add('active');
      } else {
        page.classList.remove('active');
        link?.classList.remove('active');
      }
    });
  }
}
