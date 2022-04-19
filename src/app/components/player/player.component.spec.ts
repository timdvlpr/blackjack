import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { Hand } from '../../models/hand';
import { Card } from '../../models/card';
import { IconModule } from '../../icon.module';
import { CardComponent } from '../card/card.component';
import { ResultComponent } from '../result/result.component';
import { MockComponent } from 'ng-mocks';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PlayerComponent,
        MockComponent(CardComponent),
        MockComponent(ResultComponent)
      ],
      imports: [IconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render player cards', () => {
    component.playerHands = [
      new Hand([new Card('♥', '10'), new Card('♥', 'J')])
    ];
    fixture.detectChanges();
    const cards =
      fixture.debugElement.nativeElement.querySelectorAll('app-card');
    expect(cards.length).toBe(2);
  });
});
