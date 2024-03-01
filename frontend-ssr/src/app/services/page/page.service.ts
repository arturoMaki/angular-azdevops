import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { StrapiResponse } from 'strapi-sdk-js';
import { environment } from '../../../environments/environment';
import { APIResponseData } from '../../../strapi-types/types';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private _strapiApiBaseUrl = environment.strapiApiBaseUrl;

  private getLastSegment(path: string): string | null {
    const match = path.match(/\/([^/]+\/?)$/);
    return match ? match[0] : null;
  }

  constructor(private _http: HttpClient) {}

  public getPage$(url: string) {
    const endpoint = '/pages';

    const slug = this.getLastSegment(url);

    const strapiApiBaseUrl = `${this._strapiApiBaseUrl}${endpoint}${slug}`;

    return this._http.get<StrapiResponse<any>>(strapiApiBaseUrl).pipe(
      map((res) => res.data.attributes.components),
      catchError(() => of([]))
    );
  }
}
