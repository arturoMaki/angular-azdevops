import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StrapiResponse } from 'strapi-sdk-js';
import { New } from '../new.interface';
import { BaseStrapiData } from 'src/common/strapi.interface';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  private _apiUrl = environment.strapiApiBaseUrl;

  constructor(private _http: HttpClient) {}

  public getNews$(): Observable<StrapiResponse<BaseStrapiData<New>[]>> {
    const endpoint = '/news';
    const params = new HttpParams()
      .append('populate', 'news_categories')
      .append('populate', 'Image');

    return this._http.get<StrapiResponse<BaseStrapiData<New>[]>>(
      `${this._apiUrl}${endpoint}`,
      {
        params: params,
      }
    );
  }

  public getNew$(
    newId: string
  ): Observable<StrapiResponse<BaseStrapiData<New>>> {
    const endpoint = '/news';
    const params = new HttpParams()
      .append('populate', 'news_categories')
      .append('populate', 'Image');

    const url = `${this._apiUrl}${endpoint}/${newId}`;

    return this._http.get<StrapiResponse<BaseStrapiData<New>>>(url, {
      params: params,
    });
  }
}
