import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PursuitOfHappinessComponent } from './Pursuit-Of-Happiness.component';
import { ActivatedRoute } from '@angular/router';

describe('PursuitOfHappinessComponent', () => {
  let component: PursuitOfHappinessComponent;
  let fixture: ComponentFixture<PursuitOfHappinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PursuitOfHappinessComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PursuitOfHappinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
