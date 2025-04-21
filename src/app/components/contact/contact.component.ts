import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormGroup, initializeContactForm } from './contact.form';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

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
export class ContactComponent {
  public constructor() {
    this.contactForm = initializeContactForm();
  }

  protected contactForm: ContactFormGroup;
}
