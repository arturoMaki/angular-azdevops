import { Router, Routes } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { DataPageService } from './services/data-page/data-page.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export function initializeDynamicRouting(
  router: Router,
  dataPageService: DataPageService
): () => Observable<any> {
  return () =>
    dataPageService.getDataPages$().pipe(
      take(1),
      map((res) => res?.data?.attributes?.data_pages?.data),
      tap((pages) => {
        if (pages) {
          router.resetConfig(dataPageService.buildTree(pages));
        }
      })
    );
}
