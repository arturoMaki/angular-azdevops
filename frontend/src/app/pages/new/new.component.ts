import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs';
import { NewService } from 'src/app/services/new/new.service';
import { environment } from 'src/environments/environment';
import { CardComponent } from '../../components/shared/card/card.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        CardComponent,
        AsyncPipe,
    ],
})
export class NewComponent {
  constructor(
    private _route: ActivatedRoute,
    private readonly _newService: NewService
  ) {}

  public new$ = this._route.paramMap.pipe(
    take(1),
    switchMap((params) => {
      const newId = params.get('newId');
      return this._newService.getNew$(newId as string);
    }),
    map((res) => res.data),
    map((data) => data.attributes)
  );

  private _strapiBaseUrl = environment.strapiBaseUrl;

  public getImage(imageUrl: string | undefined) {
    return `${this._strapiBaseUrl}${imageUrl || ''}`;
  }

  ngOnInit() {}
}
