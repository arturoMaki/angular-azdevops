import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePageComponent } from 'src/app/components/base/base-page/base-page.component';
import { environment } from 'src/environments/environment';
import { StrapiResponse } from 'strapi-sdk-js';

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

interface TreeNode {
  title: string;
  slug: string;
  children?: TreeNode[];
}

interface Node {
  path: string;
  component: typeof BasePageComponent;
  children: Node[];
}

@Injectable({
  providedIn: 'root',
})
export class DataPageService {
  private _apiUrl = environment.strapiApiBaseUrl;

  constructor(private _http: HttpClient) {}

  public getDataPages$(): Observable<StrapiResponse<any[]>> {
    const params = new HttpParams().append(
      'populate[parent][populate][0]',
      'parent'
    );

    const endpoint = '/data-pages';

    return this._http.get<StrapiResponse<any[]>>(`${this._apiUrl}${endpoint}`, {
      params,
    });
  }

  public buildTree(nodes: Page[], parentName: string | null = null): Node[] {
    const result: Node[] = [];

    nodes.forEach((node) => {
      const nodeParentName =
        node.attributes.parent?.data?.attributes?.Slug ?? null;

      if (nodeParentName === parentName) {
        const newNode: Node = {
          path: node.attributes.Slug.substring(1),
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
