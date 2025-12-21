import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const appConfigTheme: ApplicationConfig = {
  providers: [
      provideAnimationsAsync(),
      providePrimeNG({
          theme: {
              preset: Aura,
              options: {
                  cssLayer: {
                      name: 'primeng',
                      order: 'theme, base, primeng'
                  }
              }
          }
      })
  ]
};

export const appConfig: ApplicationConfig = {
  providers: [
    ...appConfigTheme.providers,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
