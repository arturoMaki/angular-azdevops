import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { environment } from 'src/environments/environment';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatButtonModule,
    MatMenuModule,
    NavigationItemComponent,
    AsyncPipe,
    RouterModule,
  ],
})
export class FooterComponent {
  public strapiBaseUrl = environment.strapiBaseUrl;

  public footerItems$ = this._navigationService.navigationLinks$('Footer').pipe(
    take(1),
    map((res) => res?.data?.attributes?.navigation_links?.data),
    map((footerLinks) =>
      this._navigationService.buildNavigationTree(footerLinks)
    )
  );

  constructor(private readonly _navigationService: NavigationService) {}
}
