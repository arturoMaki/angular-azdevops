import { Component } from '@angular/core';
import { map, take, tap } from 'rxjs';
import { ComponentService } from 'src/app/services/component/components.service';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public newContent: string[] = [];
  public news$ = this._newService.getNews().pipe(
    take(1),
    tap((a) =>
      a.data.forEach((d) => {
        const content = d.attributes.Content?.map((b) =>
          b.children.map((c) => c.text).join()
        ).join();

        this.newContent.push(content);
      })
    ),
    map((res) => res.data),
    map((data) => data.map((n) => n.attributes))
  );

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

  constructor(
    private _componentService: ComponentService,
    private readonly _newService: NewService
  ) {}
}
