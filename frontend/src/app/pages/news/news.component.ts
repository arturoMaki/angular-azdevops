import { Component } from '@angular/core';
import { map, take, tap } from 'rxjs';
import { NewService } from 'src/app/services/new/new.service';
import { environment } from 'src/environments/environment';
import { CardComponent } from '../../components/shared/card/card.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        CardComponent,
        AsyncPipe,
    ],
})
export class NewsComponent {
  public newContent: string[] = [];
  public news$ = this._newService.getNews$().pipe(
    take(1),
    tap((a) => {
      a.data.forEach((d) => {
        const content = d.attributes.Content?.map((b) =>
          b.children.map((c) => c.text).join()
        ).join();

        this.newContent.push(content);
      });
    }),
    map((res) => res.data)
  );

  private _strapiBaseUrl = environment.strapiBaseUrl;

  public getImage(imageUrl: string) {
    return `${this._strapiBaseUrl}${imageUrl}`;
  }

  constructor(private readonly _newService: NewService) {}
}
