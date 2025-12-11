import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentCareerComponent } from './Web-Development-Career.component';
import { ActivatedRoute } from '@angular/router';

describe('WebDevelopmentCareerComponent', () => {
  let component: WebDevelopmentCareerComponent;
  let fixture: ComponentFixture<WebDevelopmentCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDevelopmentCareerComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDevelopmentCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
