import {
  AsyncPipe,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PageService } from '../../services/page/page.service';
import { CardComponent } from '../shared/card/card.component';
import { TabGroupComponent } from '../shared/tab-group/tab-group.component';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    TabGroupComponent,
    CardComponent,
    AsyncPipe,
  ],
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
