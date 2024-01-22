import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page/page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(
    public pageService: PageService,
    private readonly _router: Router
  ) {
    this.pageService.getPage$(this._router.url);
  }
}
