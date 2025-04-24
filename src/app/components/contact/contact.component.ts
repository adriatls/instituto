import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormGroup, initializeContactForm } from './contact.form';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { send as emailjsSend } from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    TextareaModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  protected contactForm: ContactFormGroup | undefined;
  protected lodingSentMessage: boolean = false;
  public ngOnInit() {
    this.contactForm = initializeContactForm();
  }

  protected sentMessage() {
    this.lodingSentMessage = true;
    const contact = {
      name: this.contactForm?.controls.name.value,
      email: this.contactForm?.controls.email.value,
      message: this.contactForm?.controls.message.value,
    };
    console.log(contact);

    emailjsSend(environment.emailJs.serviceId, environment.emailJs.templateId, contact, {
      publicKey: environment.emailJs.publicKey,
    }).then(
      () => {
        console.log('Sent!');
        this.lodingSentMessage = false;
        this.contactForm?.reset();
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.lodingSentMessage = false;
      }
    );
  }
}
