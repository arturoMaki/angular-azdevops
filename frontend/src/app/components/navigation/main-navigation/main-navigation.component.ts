import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
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
