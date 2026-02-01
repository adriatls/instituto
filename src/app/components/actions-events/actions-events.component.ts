import { Component } from '@angular/core';
import { GalleriaComponent, IImage } from '../galleria/galleria.component';

@Component({
  selector: 'app-actions-events',
  imports: [GalleriaComponent],
  templateUrl: './actions-events.component.html',
  styleUrl: './actions-events.component.scss',
})
export class ActionsEventsComponent {
  protected images: IImage[] = [
    {
      src: '../../../assets/surfcasting/1.jpeg',
      alt: 'Description for Image 1',
    },
    {
      src: '../../../assets/surfcasting/2.jpeg',
      alt: 'Description for Image 2',
    },
    {
      src: '../../../assets/surfcasting/3.jpeg',
      alt: 'Description for Image 3',
    },
  ];
}
