import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { ComponentService } from 'src/app/services/component/components.service';
import { FooterComponent } from '../navigation/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MainNavigationComponent } from '../navigation/main-navigation/main-navigation.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [
        MainNavigationComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class LayoutComponent {
  public globalComponents$ = this._componentService.getGlobalComponents().pipe(
    take(1),
    map((res) => res.data.attributes.components)
  );

  public footerData$ = this.globalComponents$.pipe(
    map((a) => {
      const footer = a.filter(
        (b: any) => b.__component === 'global-components.footer'
      );
      return footer.map((c: any) => c.Link)[0];
    })
  );

  public headerData$ = this.globalComponents$.pipe(
    map((a) => {
      const header = a.filter(
        (b: any) => b.__component === 'global-components.header'
      );

      return header.map((b: any) => b.data_pages)[0].data;
    })
  );

  constructor(private _componentService: ComponentService) {}
}
