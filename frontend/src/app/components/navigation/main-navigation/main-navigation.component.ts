import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
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
export class MainNavigationComponent {
  public mainNavigationItems$ = this._navigationService
    .navigationLinks$('MainNavigation')
    .pipe(
      take(1),
      map((res) => res?.data?.attributes?.navigation_links?.data),
      map((navigationLinks) =>
        this._navigationService.buildNavigationTree(navigationLinks)
      )
    );

  constructor(private readonly _navigationService: NavigationService) {}
}
