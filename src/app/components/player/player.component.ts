import { Component, Input } from '@angular/core';
import { Hand } from '../../models/hand';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() playerHands: Hand[] = [];
  @Input() currentHandIndex = 0;
}
