import { Component, Input, OnInit } from '@angular/core';



interface Project {
  title: string;
  image: string;
  category: string[];
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


  categories: string[] = ['All', 'Web development','Application','Web design','Excel' ];
  selectedCategory: string = 'All';

  allProjects: Project[] = [
    { title: 'Hrm', image: './assets/images/p1.png', category: ['Web development', 'Excel'] },
    { title: 'One Quest', image: './assets/images/p4.png', category: ['Application'] },
    { title: 'Clim IT', image: './assets/images/p2.png', category: ['Web development'] },
    { title: 'Royal Touch', image: './assets/images/p3.png', category: ['Web design'] },
  ];

  filteredProjects: Project[] = [];

  ngOnInit() {
    this.applyFilter();
  }

applyFilter() {
  if (this.selectedCategory === 'All') {
    const seenTitles = new Set<string>();
    this.filteredProjects = [];

    for (const project of this.allProjects) {
      if (!seenTitles.has(project.title)) {
        this.filteredProjects.push(project);
        seenTitles.add(project.title);
      }
    }
  } else {
    this.filteredProjects = this.allProjects.filter(
      (p) => p.category.includes(this.selectedCategory)
    );
  }
}


  selectCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilter();
  }
}