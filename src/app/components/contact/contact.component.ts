import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormGroup, initializeContactForm } from './contact.form';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { send as emailjsSend } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    TextareaModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  protected contactForm: ContactFormGroup | undefined;
  protected lodingSentMessage: boolean = false;

  public constructor(private readonly messageService: MessageService) {}

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

    emailjsSend(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      contact,
      {
        publicKey: environment.emailJs.publicKey,
      }
    ).then(
      () => {
        this.showMessageSuccess();
        this.lodingSentMessage = false;
        this.contactForm?.reset();
      },
      () => {
        this.showMessageError();
      }
    );
  }

  private showMessageSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Mensagem enviada!',
      life: 3000,
    });
  }

  private showMessageError() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Erro',
      detail:
        'Não foi possível enviar sua mensagem! Por favor, tente mais tarde.',
      life: 3000,
    });
  }
}
