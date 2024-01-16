import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { NewService } from './services/new/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public news$ = this.newService.getNews().pipe(
    take(1),
    map((res) => res.data),
    map((data) => data.map((n) => n.attributes))
  );

  constructor(private readonly newService: NewService) {}

  title = 'angular-azdevops';
}
