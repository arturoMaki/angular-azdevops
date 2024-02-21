import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
})
export class CardComponent {
  @Input()
  public title?: string;

  @Input()
  public subtitle?: string;

  @Input()
  public image?: string;
}
