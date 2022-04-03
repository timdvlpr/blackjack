import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonComponent } from './action-button.component';
import { IconModule } from '../../icon.module';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionButtonComponent],
      imports: [IconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hit button if type is hit', () => {
    component.type = 'hit';
    fixture.detectChanges();
    const hitBtn = fixture.debugElement.nativeElement.querySelector('.hit-btn');
    expect(hitBtn).not.toBeNull();
  });

  it('should render stand button if type is stand', () => {
    component.type = 'stand';
    fixture.detectChanges();
    const standBtn =
      fixture.debugElement.nativeElement.querySelector('.stand-btn');
    expect(standBtn).not.toBeNull();
  });

  it('should render split button if type is split', () => {
    component.type = 'split';
    fixture.detectChanges();
    const splitBtn =
      fixture.debugElement.nativeElement.querySelector('.split-btn');
    expect(splitBtn).not.toBeNull();
  });

  it('should render new round button if type is newRound', () => {
    component.type = 'newRound';
    fixture.detectChanges();
    const newRoundBtn =
      fixture.debugElement.nativeElement.querySelector('.new-round-btn');
    expect(newRoundBtn).not.toBeNull();
  });
});
