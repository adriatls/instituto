import { providePrimeNG } from 'primeng/config';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';

const appConfigTheme: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
  ],
};

export const appConfig: ApplicationConfig = {
  providers: [
    ...appConfigTheme.providers,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
