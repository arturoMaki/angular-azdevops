import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiResponse } from 'strapi-sdk-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private _strapiApiBaseUrl = environment.strapiApiBaseUrl;

  constructor(private http: HttpClient) {}

  public getGlobalComponents(): Observable<StrapiResponse<any>> {
    const endpoint = '/global';
    const params = '?populate[components][populate]=*';
    const url = `${this._strapiApiBaseUrl}${endpoint}${params}`;

    return this.http.get<StrapiResponse<any>>(url);
  }
}
