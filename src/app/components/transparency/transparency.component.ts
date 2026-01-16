import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-transparency',
  imports: [ButtonModule],
  templateUrl: './transparency.component.html',
  styleUrl: './transparency.component.scss',
})
export class TransparencyComponent {

  protected openDocument(documentName: string) {
    window.open(`assets/${documentName}.pdf`, '_blank');
  }
}
