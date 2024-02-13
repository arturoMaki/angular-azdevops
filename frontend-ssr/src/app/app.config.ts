import { ApplicationConfig } from '@angular/core';
import { Router, provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

async function provideRoutes() {
  return provideRouter(await routes);
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: 'routes', useFactory: provideRoutes, deps: [Router] },
    provideClientHydration(),
  ],
};
