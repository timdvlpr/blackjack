import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { Result } from '../../enums/result';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render win message if player won', () => {
    component.result = Result.WIN;
    fixture.detectChanges();
    const msg = fixture.debugElement.nativeElement.querySelector('p');
    expect(msg.innerText).toBe('WIN');
  });

  it('should render loss message if player lost', () => {
    component.result = Result.LOSS;
    fixture.detectChanges();
    const msg = fixture.debugElement.nativeElement.querySelector('p');
    expect(msg.innerText).toBe('LOSS');
  });

  it('should render tie message if player tied', () => {
    component.result = Result.TIE;
    fixture.detectChanges();
    const msg = fixture.debugElement.nativeElement.querySelector('p');
    expect(msg.innerText).toBe('TIE');
  });

  it('should render bust message if player busted', () => {
    component.result = Result.BUST;
    fixture.detectChanges();
    const msg = fixture.debugElement.nativeElement.querySelector('p');
    expect(msg.innerText).toBe('BUST');
  });
});
