import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
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
