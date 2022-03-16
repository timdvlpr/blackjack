import { Component, Input } from '@angular/core';
import { Hand } from '../../models/hand';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent {
  @Input() dealerHand: Hand | undefined;
  @Input() revealCard = false;
}
