import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public pageService: PageService,
    private readonly _router: Router
  ) {
    this.pageService.getPage$(this._router.url);
  }
}
