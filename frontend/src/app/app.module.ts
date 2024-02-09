import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageComponent } from './components/base/base-page/base-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { MainNavigationComponent } from './components/navigation/main-navigation/main-navigation.component';
import { NavigationItemComponent } from './components/navigation/navigation-item/navigation-item.component';
import { CardComponent } from './components/shared/card/card.component';
import { TabGroupComponent } from './components/shared/tab-group/tab-group.component';
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
      map((res) => res?.data?.attributes?.data_pages?.data),
      tap((pages) => {
        router.resetConfig(myService.buildTree(pages));
      })
    );
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NewsComponent,
    NewComponent,
    BasePageComponent,
    CardComponent,
    TabGroupComponent,
    MainNavigationComponent,
    NavigationItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
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
