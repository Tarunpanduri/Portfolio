import { Component } from '@angular/core';

@Component({
  selector: 'app-v2about',
  standalone: false,
  templateUrl: './v2about.component.html',
  styleUrl: './v2about.component.css'
})
export class V2aboutComponent {
  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'React Native',
    'React.Js',
    'Node.Js',
    'Tailwind CSS',
    'Figma',
    'Ms Excel'
  ];
}
