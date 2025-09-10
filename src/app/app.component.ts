
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {







  activeSection = 'about';
  activeVersion: 'v1' | 'v2' = 'v1';
  showSwitcher = false;

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  setVersion(version: 'v1' | 'v2') {
    this.activeVersion = version;
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top on switch
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    this.showSwitcher = scrollTop + windowHeight >= fullHeight - 50; 
  }
}
