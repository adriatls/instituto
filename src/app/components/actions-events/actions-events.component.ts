import { Component } from '@angular/core';
import { GalleriaComponent, IGalleria } from '../galleria/galleria.component';

@Component({
  selector: 'app-actions-events',
  imports: [GalleriaComponent],
  templateUrl: './actions-events.component.html',
  styleUrl: './actions-events.component.scss',
})
export class ActionsEventsComponent {

  protected arraiaMariaClaraEvent: IGalleria = {
    title: 'Arraiá da Maria Clara',
    date: '06/07/2024, Cascavel-CE',
    description: 'Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    images: [
      {
        src: '../../../assets/arraia-maria-clara/1.png',
        alt: 'Description for Image 1',
      },
      {
        src: '../../../assets/arraia-maria-clara/2.png',
        alt: 'Description for Image 2',
      },
      {
        src: '../../../assets/arraia-maria-clara/3.png',
        alt: 'Description for Image 3',
      },
      {
        src: '../../../assets/arraia-maria-clara/4.png',
        alt: 'Description for Image 4',
      }
    ]
  };
  protected mesaSescEvent: IGalleria = {
    title: 'Mesa SESC Brasil',
    date: '04/2025, Beberibe-CE',
    description: 'Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    images: [
      {
        src: '../../../assets/mesa-sesc/1.jpeg',
        alt: 'Description for Image 1',
      },
      {
        src: '../../../assets/mesa-sesc/2.jpeg',
        alt: 'Description for Image 2',
      },
    ]
  }
  protected surfcastingEvent: IGalleria = {
    title: '6° Open Brasil de Surfcasting Pesque e Solte',
    date: '29/08/2025, Beberibe-CE',
    description: 'Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    images: [
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
    ]
  };

  protected cursoAquaviarioEvent: IGalleria = {
    title: 'Curso de Aquaviário',
    date: '09/2025, Beberibe-CE',
    description: 'Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
    images: [
      {
        src: '../../../assets/curso-aquaviario/1.jpeg',
        alt: 'Description for Image 1',
      },
      {
        src: '../../../assets/curso-aquaviario/2.jpeg',
        alt: 'Description for Image 2',
      }
    ]
  }
}
