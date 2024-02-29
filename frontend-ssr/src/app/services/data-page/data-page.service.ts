import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { StrapiResponse } from 'strapi-sdk-js';
import { environment } from '../../../environments/environment';
import { APIResponseData } from '../../../strapi-types/types';
import { BasePageComponent } from '../../components/base-page/base-page.component';

@Injectable({
  providedIn: 'root',
})
export class DataPageService {
  private _strapiApiBaseUrl = environment.strapiApiBaseUrl;

  constructor(private _http: HttpClient) {}

  public getDataPages$(): Observable<
    StrapiResponse<APIResponseData<'api::website.website'>>
  > {
    const endpoint = '/websites/the-times';

    return this._http.get<
      StrapiResponse<APIResponseData<'api::website.website'>>
    >(`${this._strapiApiBaseUrl}${endpoint}`);
  }

  public buildTree(
    nodes: APIResponseData<'api::data-page.data-page'>[],
    parentName: string | null = null
  ): Routes {
    const result: Routes = [];

    nodes.forEach((node) => {
      const nodeParentName =
        node.attributes.parent?.data?.attributes?.Slug ?? null;

      if (nodeParentName === parentName) {
        const newNode: Route = {
          path: node?.attributes?.Slug?.substring(1) || '',
          component: BasePageComponent,
          children: [],
        };

        const children = this.buildTree(nodes, node.attributes.Slug);

        if (children.length > 0) {
          newNode.children = children;
        }

        result.push(newNode);
      }
    });

    return result;
  }
}
