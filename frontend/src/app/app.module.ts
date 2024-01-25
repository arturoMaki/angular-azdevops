import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
} from '@nebular/theme';
import { Observable, map, take, tap } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageComponent } from './components/base/base-page/base-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { CardComponent } from './components/shared/card/card.component';
import { NewComponent } from './pages/new/new.component';
import { NewsComponent } from './pages/news/news.component';
import { DataPageService } from './services/data-page/data-page.service';

export let AppInjector: Injector;

export function initializeDynamicRouting(
  router: Router
): () => Observable<any[]> {
  const myService = AppInjector.get(DataPageService);

  return () =>
    myService.getDataPages$().pipe(
      take(1),
      map((res) => res?.data),
      map((pages) => pages.filter((page) => !page.attributes.Static)),
      map((pages) =>
        pages.map((page) => ({
          path: page.attributes.Slug.substring(1),
          component: BasePageComponent,
        }))
      ),
      tap((dynamicRoutes) => {
        router.resetConfig([...myService.staticRoutes, ...dynamicRoutes]);
      })
    );
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NewsComponent,
    NewComponent,
    AlertComponent,
    BasePageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbActionsModule,
    NbCardModule,
    NbAlertModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDynamicRouting,
      multi: true,
      deps: [Router],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
