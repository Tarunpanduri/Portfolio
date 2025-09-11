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

}
