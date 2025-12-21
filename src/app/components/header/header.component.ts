import { MenubarModule } from 'primeng/menubar';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerItens: MenuItem[] | undefined;

  ngOnInit() {
    this.headerItens = [
      {
        label: 'O Instituto',
        command: () => this.scrollTo('instituto'),
        style: { fontSize: '1.50rem' },
      },
      {
        label: 'Ações',
        command: () => this.scrollTo('acoes'),
        style: { fontSize: '1.50rem' },
      },
      {
        label: 'Eventos',
        command: () => this.scrollTo('eventos'),
        style: { fontSize: '1.50rem' },
      },
      {
        label: 'Como doar',
        command: () => this.scrollTo('doar'), 
        style: { fontSize: '1.50rem' },
      },
      {
        label: 'Transparência',
        command: () => this.scrollTo('transparencia'),
        style: { fontSize: '1.50rem' },
      },
      {
        label: 'Parceiros',
        command: () => this.scrollTo('parceiros'),
        style: { fontSize: '1.50rem' },
      },
      {
        label: 'Contato',
        command: () => this.scrollTo('contato'),
        style: { fontSize: '1.50rem' },
      },
    ];
  }

  private scrollTo(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
