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

}
