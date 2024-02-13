import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';
import { APIResponseData } from '../../../strapi-types/types';
import { BasePageComponent } from '../../components/base-page/base-page.component';

interface Page {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    parent?: {
      data: Page;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataPageService {
  constructor() {}

  public static getDataPages() {
    const endpoint = '/websites/the-times';

    return axios.get<AxiosResponse<APIResponseData<'api::website.website'>>>(
      `${environment.strapiApiBaseUrl}${endpoint}`
    );
  }

  public static buildTree(
    nodes: APIResponseData<'api::data-page.data-page'>[],
    parentName: string | null = null
  ): Routes {
    const result: Routes = [];

    nodes.forEach((node) => {
      const nodeParentName =
        node.attributes.parent?.data?.attributes?.Slug ?? null;

      if (nodeParentName === parentName) {
        const newNode: Route = {
          path: node.attributes.Slug?.substring(1),
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
    console.log(result);

    return result;
  }
}
