import { Component, Input, OnInit } from '@angular/core';



interface Project {
  title: string;
  image: string;
  category: string;
}



@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  @Input() isActive: boolean = false;
  dropdownOpen: boolean = false;


  categories: string[] = ['All', 'Web development','Applications','Web design','Excel' ];
  selectedCategory: string = 'All';

  allProjects: Project[] = [
    { title: 'Finance', image: './assets/images/project-1.jpg', category: 'Web development' },
    { title: 'Orizon', image: './assets/images/project-2.png', category: 'Web development' },
    { title: 'Fundo', image: './assets/images/project-3.jpg', category: 'Web design' },
    { title: 'Brawlhalla', image: './assets/images/project-4.png', category: 'Applications' },
    { title: 'DSM.', image: './assets/images/project-5.png', category: 'Web design' },
    { title: 'MetaSpark', image: './assets/images/project-6.png', category: 'Web design' },
    { title: 'Summary', image: './assets/images/project-7.png', category: 'Web development' },
    { title: 'Task Manager', image: './assets/images/project-8.jpg', category: 'Applications' },
    { title: 'Arrival', image: './assets/images/project-9.png', category: 'Web development' },
  ];

  filteredProjects: Project[] = [];

  ngOnInit() {
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedCategory === 'All') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter(
        (p) => p.category === this.selectedCategory
      );
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilter();
  }
}