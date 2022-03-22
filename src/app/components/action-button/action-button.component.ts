import { Component, Input } from '@angular/core';

type ActionButton = 'stand' | 'draw' | 'doubleDown' | 'split';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() type: ActionButton = 'stand';
  @Input() disabled = false;
}
