import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() isActive: boolean = false;

  modalActive = false;
  modalData = {
    imgSrc: '',
    name: '',
    date: '',
    text: '',
    proffession: ''
  };

  testimonials = [
    {
      imgSrc: './assets/images/avatar-1.png',
      name: 'Sri Hari Yiboina',
      proffession: 'Director,  ClimIt Solutions Pvt Ltd',
      text: `Tarun is highly dedicated, detail-oriented, and consistently delivers work of exceptional quality. He approaches every project with a problem-solving mindset and communicates clearly, making collaboration smooth and productive.`
    },
    {
      imgSrc: './assets/images/avatar-2.png',
      name: 'Yashwanth Tadi',
      proffession: 'CTO, ClimIt Solutions Pvt Ltd',
      text: `Tarun combines technical skill with creativity, bringing fresh ideas and thoughtful execution to every project. He has a sharp eye for detail and a genuine passion for producing meaningful work. His ability to balance creativity with practical solutions makes him stand out.`
    },
    {
      imgSrc: './assets/images/avatar-3.png',
      name: 'Ibrahim M',
      proffession: 'Manager, TolzeTech',
      text: `Tarun is easy to collaborate with. He’s responsive, open to feedback, and makes the whole process smooth from start to finish. I always felt updated on the progress, and he made sure my ideas were understood and reflected in the final outcome.`
    },
    // {
    //   imgSrc: './assets/images/avatar-4.png',
    //   name: 'Henry William',
    //   date: '2021-06-08',
    //   text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`
    // }
  ];

  openModal(data: any) {
    this.modalData = { ...data };
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }
}