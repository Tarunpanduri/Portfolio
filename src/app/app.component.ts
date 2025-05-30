
import { Component } from '@angular/core';

interface Testimonial {
  avatar: string;
  avatarAlt: string;
  title: string;
  text: string;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  // Sidebar toggle state
  sidebarActive = false;

  // Testimonials data (example)
  testimonials: Testimonial[] = [
    {
      avatar: 'assets/avatar1.jpg',
      avatarAlt: 'User 1',
      title: 'John Doe',
      text: 'Great service!',
      category: 'service',
    },
    {
      avatar: 'assets/avatar2.jpg',
      avatarAlt: 'User 2',
      title: 'Jane Smith',
      text: 'Awesome experience!',
      category: 'product',
    },
    // Add more testimonials here...
  ];

  // Modal state
  isModalActive = false;
  modalContent: Testimonial | null = null;

  // Custom select and filter
  selectActive = false;
  selectedFilter = 'all';
  filterCategories = ['all', 'service', 'product']; // add your categories here

  // Filter buttons active state
  activeFilterBtn = 'all';

  // Form validation simulation
  formValid = false;
  formInputs = {
    name: '',
    email: '',
    message: '',
  };

  // Navigation state
  pages = ['home', 'about', 'services', 'contact'];
  activePage = 'home';

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  openModal(testimonial: Testimonial) {
    this.modalContent = testimonial;
    this.isModalActive = true;
  }

  closeModal() {
    this.isModalActive = false;
    this.modalContent = null;
  }

  toggleSelect() {
    this.selectActive = !this.selectActive;
  }

  selectFilter(category: string) {
    this.selectedFilter = category;
    this.activeFilterBtn = category;
    this.selectActive = false;
  }

  get filteredTestimonials() {
    if (this.selectedFilter === 'all') {
      return this.testimonials;
    }
    return this.testimonials.filter(
      (t) => t.category === this.selectedFilter
    );
  }

  onFormInputChange() {
    // Simple form validation example
    this.formValid =
      this.formInputs.name.trim() !== '' &&
      this.formInputs.email.trim() !== '' &&
      this.formInputs.message.trim() !== '';
  }

  navigateTo(page: string) {
    this.activePage = page;
    window.scrollTo(0, 0);
  }
}
