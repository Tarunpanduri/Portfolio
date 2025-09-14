import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environments.prod';


interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface Project {
  tag: string;
  image: string;     
  title: string;
  description: string;
  projectInfo?: string;
  client?: string;
  year?: string;
  role?: string;
  Contribution?: string;
}


@Component({
  selector: 'app-v2home',
  standalone: false,
  templateUrl: './v2home.component.html',
  styleUrl: './v2home.component.css'
})
export class V2homeComponent {
    mobileMenuOpen = false;

    closeAfterScroll() {
  setTimeout(() => {
    this.mobileMenuOpen = false;
  }, 100); 
}



    skills: string[] = [
    'HTML5',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'Angular',
    'Node.Js',
    'React.Js',
    'Ms Excel',
    'Figma',
    'React Native',
  ];


  educationList = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'DLR Pg College · Kakinada',
      years: '2023 – 2025',
      description:
        'Specialized in Management and Business Strategy with hands-on projects and a focus on practical leadership skills.'
    },
    {
      degree: 'Bachelor of Computer Science (B.Sc Mecs)',
      institution: 'Aditya Degree College · Rajahmundry',
      years: '2020 – 2023',
      description:
        'Gained a strong foundation in software development, algorithms, and full-stack web development.'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Narayana Junior College · Kakinada',
      years: '2018 – 2020',
      description:
        'Completed coursework in Mathematics, Physics, and Chemistry, building problem-solving and analytical skills.'
    },
    {
      degree: 'High School',
      institution: 'Little Buds School · Kakinada',
      years: '2017 – 2018',
      description:
        'Graduated with a focus on Science and Mathematics, laying the groundwork for future academic pursuits.'
    }
  ];

  experiences: Experience[] = [
    {
      role: 'Associate Software Developer',
      company: ' CLIM IT Solutions',
      duration: 'Oct 2024 — Present',
      description: `Worked in a collaborative and fast-paced Agile environment, contributing to cross-functional teams to deliver high-quality software solutions. Applied skills in Angular, React.js, React Native, HTML, CSS, and JavaScript to build scalable, user-friendly applications. Gained hands-on experience with API integration, database management, and performance optimization. Actively participated in code reviews, debugging, and troubleshooting to ensure best practices and maintain code quality while meeting project deadlines.`
    },
  ];


projects: Project[] = [
{
  tag: 'Website',
  image: 'assets/v2/p1.png',
  title: 'Clim IT Company Website',
  description:
    'Developed the official website for Clim IT, focusing on a clean layout, clear service presentation, and responsive design for all devices. The site highlights company offerings and provides easy navigation for potential clients.',
  projectInfo: 'Corporate website',
  client: 'Clim IT',
  year: '2024',
  role: 'Front-end Developer',
  Contribution: 'Front-End Development | Responsive Design | Contact Form Integration',
},
{
  tag: 'Web Application',
  image: 'assets/v2/p2.jpg',
  title: 'TolzeTech HRM System',
  description:
    'Developed a custom Human Resource Management system for TolzeTech to streamline employee data, attendance tracking, and payroll processes. Focused on creating an intuitive interface and scalable architecture to support future growth.',
  projectInfo: 'Full-stack HRM web application.',
  client: 'TolzeTech',
  year: '2023',
  role: 'Full-stack Developer',
  Contribution: ' User Authentication | Attendance Module | Payroll Integration | Database Design',
},
{
  tag: 'Mobile Application',
  image: 'assets/v2/p3.png',
  title: 'Onequest App',
  description:
    'Developed a feature in the Onequest App that dynamically displays the top-rated service for a user-selected address, leveraging modern React patterns, API integration, and responsive design for seamless mobile experience.',
  projectInfo: 'Mobile Application',
  client: 'Yashwanth',
  year: '2025',
  role: 'React Native Developer',
  Contribution: 'Dynamic UI | API Integration | Address-based Service Display',
},
{
  tag: 'Design',
  image: 'assets/v2/p4.png',
  title: 'Royal Touch App Design',
  description:
    'Designed the Royal Touch mobile app in Figma, creating user-friendly interfaces, visually appealing layouts, and an intuitive user experience tailored to the client’s brand identity.',
  projectInfo: 'Mobile App Design',
  client: 'Royal Touch',
  year: '2025',
  role: 'UI/UX Designer',
  Contribution: 'App UI Design | Figma Prototyping | Brand-focused UX',
}


  ];

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;




  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  async sendEmail() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;  // start loader

    // Validation
    if (!this.name || !this.email || !this.subject || !this.message) {
      this.errorMessage = 'Please fill in all fields.';
      this.isLoading = false; // stop loader
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      this.isLoading = false; 
      return;
    }

    try {
      const result: EmailJSResponseStatus = await emailjs.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        {
          from_name: this.name,
          from_email: this.email,
          subject: this.subject,
          message: this.message
        },
        environment.emailJs.publicKey
      );

      if (result.status === 200) {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      }
    } catch (error) {
      console.error(error);
      this.errorMessage = 'Something went wrong. Please try again.';
    } finally {
      this.isLoading = false; 
    }
  }
}

