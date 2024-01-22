import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseStrapiData } from 'src/common/strapi.interface';
import { environment } from 'src/environments/environment';
import { StrapiResponse } from 'strapi-sdk-js';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private _apiUrl = environment.strapiApiBaseUrl;

  constructor(private _http: HttpClient) {}

  public getPage$(
    slug: string
  ): Observable<StrapiResponse<BaseStrapiData<any>>> {
    const endpoint = '/slug-page';

    const url = `${this._apiUrl}${endpoint}${slug}`;

    return this._http
      .get<StrapiResponse<BaseStrapiData<any>>>(url)
      .pipe(map((res) => res.data.attributes.components));
  }
}
