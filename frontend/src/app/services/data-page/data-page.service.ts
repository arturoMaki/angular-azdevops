import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { NewComponent } from 'src/app/pages/new/new.component';
import { NewsComponent } from 'src/app/pages/news/news.component';
import { environment } from 'src/environments/environment';
import { StrapiResponse } from 'strapi-sdk-js';

@Injectable({
  providedIn: 'root',
})
export class DataPageService {
  public staticRoutes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: 'news/:newId', component: NewComponent },
  ];

  private _apiUrl = environment.strapiApiBaseUrl;

  constructor(private _http: HttpClient) {}

  public getDataPages$(): Observable<StrapiResponse<any[]>> {
    const endpoint = '/data-pages';

    return this._http.get<StrapiResponse<any[]>>(`${this._apiUrl}${endpoint}`);
  }
}
