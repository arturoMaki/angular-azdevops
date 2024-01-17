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
  private apiUrl = environment.strapiApiBaseUrl;

  constructor(private http: HttpClient) {}

  public getNews(): Observable<StrapiResponse<BaseStrapiData<New>[]>> {
    const endpoint = '/news';
    const params = new HttpParams()
      .append('populate', 'news_categories')
      .append('populate', 'Image');

    return this.http.get<StrapiResponse<BaseStrapiData<New>[]>>(
      `${this.apiUrl}${endpoint}`,
      {
        params: params,
      }
    );
  }
}
