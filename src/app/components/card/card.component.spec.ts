import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show card front if showCardBack is false', () => {
    component.showCardBack = false;
    fixture.detectChanges();
    const cardFront =
      fixture.debugElement.nativeElement.querySelector('.card-front');
    expect(cardFront).not.toBeNull();
  });

  it('should show card back if showCardBack is true', () => {
    component.showCardBack = true;
    fixture.detectChanges();
    const cardBack =
      fixture.debugElement.nativeElement.querySelector('.card-back');
    expect(cardBack).not.toBeNull();
  });
});
