import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
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
