import { Component } from '@angular/core';

@Component({
  selector: 'app-v2home',
  standalone: false,
  templateUrl: './v2home.component.html',
  styleUrl: './v2home.component.css'
})
export class V2homeComponent {
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
      institution: 'JNTU Kakinada',
      years: '2023 – 2025',
      description:
        'Specialized in Management and Business Strategy with hands-on projects and a focus on practical leadership skills.'
    },
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science',
      institution: 'Aditya Engineering College',
      years: '2019 – 2023',
      description:
        'Gained a strong foundation in software development, algorithms, and full-stack web development.'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Aditya Junior College',
      years: '2017 – 2019',
      description:
        'Completed coursework in Mathematics, Physics, and Chemistry, building problem-solving and analytical skills.'
    }
  ];

}
