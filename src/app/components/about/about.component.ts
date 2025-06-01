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
    text: ''
  };

  testimonials = [
    {
      imgSrc: './assets/images/avatar-1.png',
      name: 'Daniel Lewis',
      date: '2021-06-14',
      text: `Tarun was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.`
    },
    // {
    //   imgSrc: './assets/images/avatar-2.png',
    //   name: 'Jessica Miller',
    //   date: '2021-06-12',
    //   text: `We were very pleased with the work done...`
    // },
    // {
    //   imgSrc: './assets/images/avatar-3.png',
    //   name: 'Emily Evans',
    //   date: '2021-06-10',
    //   text: `She has a lot of experience and is very concerned...`
    // },
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