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

  private getLastSegment(path: string): string | null {
    const match = path.match(/\/([^/]+\/?)$/);
    return match ? match[0] : null;
  }

  constructor(private _http: HttpClient) {}

  public getPage$(url: string): Observable<any> {
    const endpoint = '/pages';

    const slug = this.getLastSegment(url);

    const apiUrl = `${this._apiUrl}${endpoint}${slug}`;

    return this._http
      .get<StrapiResponse<BaseStrapiData<any>>>(apiUrl)
      .pipe(map((res) => res.data.attributes.components));
  }
}
