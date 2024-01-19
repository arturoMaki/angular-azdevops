import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StrapiResponse } from 'strapi-sdk-js';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private apiUrl = environment.strapiApiBaseUrl;

  constructor(private http: HttpClient) {}

  public getGlobalComponents(): Observable<StrapiResponse<any>> {
    const endpoint = '/global';
    const params = '?populate[components][populate]=*';
    const url = `${this.apiUrl}${endpoint}${params}`;

    return this.http.get<StrapiResponse<any>>(url);
  }
}
