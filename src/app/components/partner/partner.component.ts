import { Component } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

interface IPartnerImage {
  src: string;
  alt: string;
  style: string;
}

@Component({
  selector: 'app-partner',
  imports: [CarouselModule],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss',
})
export class PartnerComponent {
  protected responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  protected partnerImages: IPartnerImage[] = [
    {
      src: '../../../assets/energy.jpeg',
      alt: 'Logo do parceiro Energy Projet',
      style: '',
    },
    {
      src: '../../../assets/triathlon.png',
      alt: 'Logo da Escolinha de Triathlon',
      style: '',
    },
    {
      src: '../../../assets/associacao-massaranduba.jpeg',
      alt: 'Logo da Associação Massaranduba',
      style: '',
    },
    {
      src: '../../../assets/sindicato.jpeg',
      alt: 'Logo do Sindicato dos Pescadores, Marisqueiras e Trabalhadores da Pesca Artesanal do Município de Beberibe',
      style: '',
    },
    {
      src: '../../../assets/ibesf.png',
      alt: 'Logo do Instituto Brasil Sem Fronteiras',
      style: '',
    },
    {
      src: '../../../assets/fasec.webp',
      alt: 'Logo da Faculdade do Sertão Central',
      style: '',
    },
    {
      src: '../../../assets/unifatecie-aquiraz.jpeg',
      alt: 'Logo da Unifatecie Polo EAD Aquiraz',
      style: '',
    },
    {
      src: '../../../assets/unifatecie-beberibe.jpeg',
      alt: 'Logo da Unifatecie Polo EAD Beberibe',
      style: '',
    },
  ];
}
