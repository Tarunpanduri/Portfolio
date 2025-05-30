
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeSection = 'about';

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
