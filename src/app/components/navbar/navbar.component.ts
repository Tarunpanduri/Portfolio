import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() activeSection: string = '';
  @Output() sectionChange = new EventEmitter<string>();

  changeSection(section: string) {
    this.sectionChange.emit(section);
  }
}
