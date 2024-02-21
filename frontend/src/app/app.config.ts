import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router, provideRouter } from '@angular/router';
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
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes)
]
};
