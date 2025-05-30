import { Component, Input } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() isActive: boolean = false;

  isSending = false;

  formData = {
    fullname: '',
    email: '',
    message: ''
  };

  notification = {
    show: false,
    message: '',
    type: '' as 'success' | 'error' | ''
  };

  sendEmail(event: Event) {
    event.preventDefault();

    if (
      !this.formData.fullname.trim() ||
      !this.formData.email.trim() ||
      !this.formData.message.trim()
    ) {
      this.showNotification('Please fill in all fields.', 'error');
      return;
    }

    // additional basic email regex check (optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.showNotification('Please enter a valid email address.', 'error');
      return;
    }

    const form = event.target as HTMLFormElement;
    this.isSending = true;

    emailjs.sendForm(
      'service_nkfgbvm',    // Your EmailJS service ID
      'template_1fued79',   // Your EmailJS template ID
      form,
      'IsCY2MddaYmulMGCc'  // Your EmailJS user/public key
    )
    .then((result) => {
      console.log('Email sent successfully!', result.text);
      this.showNotification('Message sent successfully!', 'success');
      form.reset();
      this.formData = { fullname: '', email: '', message: '' };
      this.isSending = false;
    }, (error) => {
      console.error('Email sending error:', error.text);
      this.showNotification('Oops, something went wrong. Please try again.', 'error');
      this.isSending = false;
    });
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.notification.message = message;
    this.notification.type = type;
    this.notification.show = true;

    setTimeout(() => {
      this.notification.show = false;
    }, 3500);
  }
}