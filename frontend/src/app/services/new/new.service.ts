import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseStrapi } from 'src/common/strapi.interface';
import { New } from '../new.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  private apiUrl = environment.strapiApiBaseUrl;

  constructor(private http: HttpClient) {}

  public getNews(): Observable<BaseStrapi<New>> {
    const endpoint = '/news';
    return this.http.get<BaseStrapi<New>>(`${this.apiUrl}${endpoint}`);
  }
}
