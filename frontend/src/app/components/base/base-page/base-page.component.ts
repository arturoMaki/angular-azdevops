import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PageService } from 'src/app/services/page/page.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
})
export class BasePageComponent {
  public components$ = this.pageService
    .getPage$(this._router.url)
    .pipe(take(1));

  private _strapiBaseUrl = environment.strapiBaseUrl;

  public getImage(imageUrl: string | undefined) {
    return `${this._strapiBaseUrl}${imageUrl || ''}`;
  }

  constructor(
    public pageService: PageService,
    private readonly _router: Router
  ) {}
}
