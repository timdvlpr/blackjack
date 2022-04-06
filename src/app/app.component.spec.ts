import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Hand } from './models/hand';
import { Card } from './models/card';
import { DealerComponent } from './components/dealer/dealer.component';
import { PlayerComponent } from './components/player/player.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { IconModule } from './icon.module';
import { CardComponent } from './components/card/card.component';
import { ResultComponent } from './components/result/result.component';
import { Result } from './enums/result';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DealerComponent,
        PlayerComponent,
        ActionButtonComponent,
        CardComponent,
        ResultComponent
      ],
      imports: [IconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize starting cards for dealer and player', () => {
    expect(component.playerHands[0].cards.length).toBe(2);
    expect(component.dealerHand.cards.length).toBe(2);
  });

  it('should reset values', () => {
    component.reset();
    expect(component.currentHandIndex).toBe(0);
    expect(component.dealerTurn).toBeFalse();
    expect(component.roundOver).toBeFalse();
    expect(component.dealerHand.cards.length).toBe(0);
    expect(component.playerHands[0].cards.length).toBe(0);
  });

  it('should draw next card for player and check total', () => {
    spyOn(component, 'checkPlayerTotal');
    component.draw();
    expect(component.playerHands[0].cards.length).toBe(3);
    expect(component.checkPlayerTotal).toHaveBeenCalled();
  });

  it('should check dealer total if player stands', () => {
    spyOn(component, 'checkDealerTotal');
    component.stand();
    expect(component.checkDealerTotal).toHaveBeenCalled();
  });

  it('should split player hand', () => {
    component.playerHands = [
      new Hand([new Card('♦', '10'), new Card('♣', '10')])
    ];
    component.split();
    expect(component.playerHands.length).toBe(2);
  });

  it('should not split player hand if hand is already split', () => {
    component.playerHands = [
      new Hand([new Card('♦', '10'), new Card('♣', '5')]),
      new Hand([new Card('♣', '10'), new Card('♣', '6')])
    ];
    component.split();
    expect(component.playerHands.length).toBe(2);
  });

  it('should set player hand to bust if total is bigger 21', () => {
    component.playerHands[0] = new Hand([
      new Card('♦', '10'),
      new Card('♣', '5'),
      new Card('♣', '9')
    ]);
    component.checkPlayerTotal();
    expect(component.playerHands[0].result).toBe(Result.BUST);
  });

  it('should end round if all player hands are bust', () => {
    const mockHand = new Hand([
      new Card('♦', '10'),
      new Card('♣', '5'),
      new Card('♣', '9')
    ]);
    component.playerHands[0] = mockHand;
    component.playerHands[1] = mockHand;
    component.currentHandIndex = 1;
    component.checkPlayerTotal();
    expect(component.dealerTurn).toBeTrue();
    expect(component.roundOver).toBeTrue();
  });
});
