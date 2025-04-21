import { MenubarModule } from 'primeng/menubar';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
ngOnInit() {
    this.headerItens = [
      {
        label: 'O Instituto',
      },
      {
        label: 'Ações',
      },
      {
        label: 'Eventos',
      },
      {
        label: 'Como doar',
      },
      {
        label: 'Parceiros',
      },
      {
        label: 'Contato',
      },
    ];
  }

  protected headerItens: MenuItem[] | undefined;
}
