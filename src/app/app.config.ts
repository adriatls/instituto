import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { appConfigTheme } from '../app.config';

export const appConfig: ApplicationConfig = {
  providers: [
    ...appConfigTheme.providers,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
