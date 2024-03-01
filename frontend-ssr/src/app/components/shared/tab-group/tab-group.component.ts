import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-tab-group',
    templateUrl: './tab-group.component.html',
    styleUrls: ['./tab-group.component.scss'],
    standalone: true,
    imports: [MatTabsModule, NgFor],
})
export class TabGroupComponent {
  @Input()
  public items?: { Label: string; Content: string }[];
}
