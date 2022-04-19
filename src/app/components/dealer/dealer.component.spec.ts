import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerComponent } from './dealer.component';
import { Hand } from '../../models/hand';
import { Card } from '../../models/card';
import { CardComponent } from '../card/card.component';
import { MockComponent } from 'ng-mocks';

describe('DealerComponent', () => {
  let component: DealerComponent;
  let fixture: ComponentFixture<DealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealerComponent, MockComponent(CardComponent)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render dealer cards', () => {
    component.dealerHand = new Hand([new Card('♥', '10'), new Card('♥', 'J')]);
    fixture.detectChanges();
    const cards =
      fixture.debugElement.nativeElement.querySelectorAll('app-card');
    expect(cards.length).toBe(2);
  });
});
