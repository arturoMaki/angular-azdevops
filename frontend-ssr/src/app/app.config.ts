import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { Router, provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeDynamicRouting, routes } from './app.routes';
import { DataPageService } from './services/data-page/data-page.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDynamicRouting,
      multi: true,
      deps: [Router, DataPageService],
    },
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideRouter(routes),
  ],
};
