import { Component } from '@angular/core';
import { GalleriaComponent, IGalleria } from '../galleria/galleria.component';

@Component({
  selector: 'app-actions-events',
  imports: [GalleriaComponent],
  templateUrl: './actions-events.component.html',
  styleUrl: './actions-events.component.scss',
})
export class ActionsEventsComponent {
  protected torneioMassarandubaEvent: IGalleria = {
    title: 'Torneio Assentamento Massaranduba',
    date: '13/11/2023, Beberibe-CE',
    description: 'Realizamos o Torneio de Fut7 e de Futmesa no assentamento da Serra do Félix afim de promover lazer, esporte e inclusão social na comunidade.',
    images: [
      {
        src: '../../../assets/torneio-massaranduba/1.png',
        alt: 'Cartaz do Torneio Assentamento Massaranduba promovido pelo Instituto Pescador Abdon Gomes da Silva, com informações sobre torneios de fut7, futmesa, distribuição de uniformes e cestas básicas.',
      },
      {
        src: '../../../assets/torneio-massaranduba/2.png',
        alt: 'Texto informativo sobre o Torneio Assentamento Massaranduba, destacando integração comunitária, competições esportivas e ações sociais realizadas na Serra do Félix.',
      },
      {
        src: '../../../assets/torneio-massaranduba/3.png',
        alt: 'Equipes de Fut7 e moradores do Assentamento Massaranduba reunidos durante o torneio esportivo promovido pelo Instituto Pescador Abdon Gomes da Silva.',
      },
      {
        src: '../../../assets/torneio-massaranduba/4.png',
        alt: 'Jovens da comunidade reunidos em ação de integração social com distribuição de frutas durante o evento no Assentamento Massaranduba.',
      },
      {
        src: '../../../assets/torneio-massaranduba/5.png',
        alt: 'Representantes do Instituto Pescador Abdon Gomes da Silva entregando uniforme a atleta durante o evento no Assentamento Massaranduba.',
      },
      {
        src: '../../../assets/torneio-massaranduba/6.png',
        alt: 'Representantes do Instituto Pescador Abdon Gomes da Silva entregando uniforme aos atletas do Torneio Assentamento Massaranduba e atletas jogando partida de FutMesa.',
      },
    ]
  };
  protected encontroAmigosEvent: IGalleria = {
    title: '1° Encontro dos Amigos',
    date: '31/03/2024, Beberibe-CE',
    description: 'Realizamos a Competição de Embarcações de 5m na Praia de Morro Branco, uma corrida de jangada, festejando a tradição náutica local com a comunidade.',
    images: [
      {
        src: '../../../assets/encontro-amigos/1.png',
        alt: 'Cartaz do 1° Encontro dos Amigos na Praia de Morro Branco promovido pelo Instituto Pescador Abdon Gomes da Silva, informando data de encerramento de inscrição e data da Competição de Embarcações de 5m.',
      },
      {
        src: '../../../assets/encontro-amigos/2.png',
        alt: 'Texto informativo sobre o 1º Encontro dos Amigos realizado pelo Instituto Pescador Abdon Gomes da Silva na Praia de Morro Branco, destacando o número de participantes e de embarcações, e o significado cultural do evento.',
      },
      {
        src: '../../../assets/encontro-amigos/3.png',
        alt: 'Jangada que competiu na Competição de Embarcações de 5m no 1º Encontro dos Amigos e entrega de prêmio a um competidor.',
      },
      {
        src: '../../../assets/encontro-amigos/4.png',
        alt: 'Entrega de premio a competidores da Competição de Embarcações de 5m no 1º Encontro dos Amigos promovido pelo Instituto Pescador Abdon Gomes da Silva.',
      }
    ]
  };
  protected arraiaMariaClaraEvent: IGalleria = {
    title: 'Arraiá da Maria Clara',
    date: '06/07/2024, Cascavel-CE',
    description: 'Realizamos um Festival Junino na Associação Comunitária do Coqueiro com sorteio de cestas básicas e eletrodomésticos, além de celebrar a cultura nordestina.',
    images: [
      {
        src: '../../../assets/arraia-maria-clara/1.png',
        alt: 'Cartaz do Arraiá da Maria Clara na Associação Comunitária do Coqueiro promovido pelo Instituto Pescador Abdon Gomes da Silva, com informações sobre data e local do evento.',
      },
      {
        src: '../../../assets/arraia-maria-clara/2.png',
        alt: 'Texto informativo sobre o Arraiá da Maria Clara na Associação Comunitária do Coqueiro, destacando o número de participantes, as atrações e a realização de sorteio de cestas básicas e eletrodomésticos.',
      },
      {
        src: '../../../assets/arraia-maria-clara/3.png',
        alt: 'Cestas básicas e eletrodomésticos, como ventilador e sanduicheira, sorteados pelo Instituto Pescador Abdon Gomes da Silva no Arraiá da Maria Clara na Associação Comunitária do Coqueiro.',
      },
      {
        src: '../../../assets/arraia-maria-clara/4.png',
        alt: 'Entrega de cesta básica a um jovem durante o Arraiá da Maria Clara e comunidade reunida durante o evento promovido pelo Instituto Pescador Abdon Gomes da Silva.',
      }
    ]
  };
  protected mesaSescEvent: IGalleria = {
    title: 'Mesa SESC Brasil',
    date: '04/2025, Beberibe-CE',
    description: 'Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis quas!',
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
  };
  protected surfcastingEvent: IGalleria = {
    title: '6° Open de Surfcasting Pesque e Solte',
    date: '29/08/2025, Beberibe-CE',
    description: 'Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis quas!',
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
    description: 'Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis quas!',
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
  };
}
