import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent {
  @Input()
  public navItem?: NavigationItem;
}
