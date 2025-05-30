import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
