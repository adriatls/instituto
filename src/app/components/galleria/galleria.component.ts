import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

export interface IImage {
  src: string;
  alt: string;
}

export interface IGalleria {
  title: string;
  date: string;
  description: string;
  images: IImage[];
}

@Component({
  selector: 'app-galleria',
  imports: [CardModule, GalleriaModule, ImageModule],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.scss',
})
export class GalleriaComponent {
  public galleriaInfo = input.required<IGalleria>();
}
