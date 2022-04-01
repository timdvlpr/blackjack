import { Component, Input } from '@angular/core';

type ActionButton = 'stand' | 'hit' | 'doubleDown' | 'split' | 'newRound';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() type: ActionButton = 'stand';
  @Input() disabled = false;
}
