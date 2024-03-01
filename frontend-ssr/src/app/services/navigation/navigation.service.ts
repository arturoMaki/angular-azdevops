import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StrapiResponse } from 'strapi-sdk-js';
import { environment } from '../../../environments/environment';

type Navigation = 'MainNavigation' | 'Footer';

interface Link {
  attributes: {
    DisplayName: string;
    URL?: string;
    Target?: '_self' | '_blank' | '_parent' | '_top';
    Name: string;
    Icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    data_page: {
      data: {
        attributes: {
          Title: string;
          Slug: string;
        };
      };
    };
  };
}

interface NavigationLink {
  id: number;
  attributes: {
    Name: string;
    main: {
      data: Link;
    };
    parent?: {
      data: Link;
    };
  };
}

export interface NavigationItem {
  title: string;
  href: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  icon: string;
  children: NavigationItem[];
  isExternal: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _strapiApiBaseUrl = environment.strapiApiBaseUrl;
  private _routePaths = this.getAllRoutePaths(this._router.config);

  constructor(private http: HttpClient, private readonly _router: Router) {}

  public navigationLinks$(
    navigator: Navigation
  ): Observable<StrapiResponse<any>> {
    const endpoint = '/ui-navigations/';
    const url = `${this._strapiApiBaseUrl}${endpoint}${navigator}`;

    return this.http.get<StrapiResponse<any>>(url);
  }

  public buildNavigationTree(
    navigationLinks: NavigationLink[],
    parentName: string | null = null
  ): NavigationItem[] {
    const result: NavigationItem[] = [];

    navigationLinks.forEach((navigationLink) => {
      const nodeParentName =
        navigationLink.attributes.parent?.data?.attributes?.Name ?? null;

      const name =
        navigationLink.attributes.main?.data?.attributes?.Name ??
        navigationLink.attributes?.Name;

      const displayName =
        navigationLink.attributes.main?.data?.attributes?.DisplayName ??
        navigationLink.attributes?.Name;

      const slug = this.getMatchingSlug(
        navigationLink.attributes.main?.data?.attributes?.data_page?.data?.attributes?.Slug.substring(
          1
        ) ?? ''
      );

      const href = navigationLink.attributes.main?.data?.attributes?.URL ?? '';
      const target =
        navigationLink.attributes.main?.data?.attributes?.Target ?? '_self';
      const icon =
        navigationLink.attributes.main?.data?.attributes?.Icon?.data?.attributes
          ?.url ?? '';

      if (nodeParentName === parentName) {
        const newNode: NavigationItem = {
          title: displayName,
          href: href || slug,
          icon,
          target,
          isExternal: !!href,
          children: [],
        };

        const children = this.buildNavigationTree(navigationLinks, name);

        if (children.length > 0) {
          newNode.children = children;
        }

        result.push(newNode);
      }
    });

    return result;
  }

  private getAllRoutePaths(routes: Route[], parentPath: string = ''): string[] {
    let paths: string[] = [];

    for (const route of routes) {
      const fullPath = parentPath + '/' + route.path;
      paths.push(fullPath);

      if (route.children && route.children.length > 0) {
        paths = paths.concat(this.getAllRoutePaths(route.children, fullPath));
      }
    }

    return paths;
  }

  private getMatchingSlug(slug: string): string {
    const regex = new RegExp(`/${slug}(?:$|/)`);
    const matchingPaths = this._routePaths.filter((route) => regex.test(route));
    if (matchingPaths.length === 0) return '';

    matchingPaths.sort((a, b) => {
      const aIndex = a.lastIndexOf(`/${slug}`);
      const bIndex = b.lastIndexOf(`/${slug}`);
      return bIndex - aIndex;
    });

    return matchingPaths[0];
  }
}
