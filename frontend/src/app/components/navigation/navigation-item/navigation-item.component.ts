import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../../services/navigation/navigation.service';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-navigation-item',
    templateUrl: './navigation-item.component.html',
    styleUrls: ['./navigation-item.component.scss'],
    standalone: true,
    imports: [NgIf, MatMenuModule],
})
export class NavigationItemComponent {
  @Input()
  public navItem?: NavigationItem;
}
