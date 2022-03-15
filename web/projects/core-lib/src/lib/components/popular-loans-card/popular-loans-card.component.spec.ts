import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularLoansCardComponent } from './popular-loans-card.component';

describe('PopularLoansCardComponent', () => {
  let component: PopularLoansCardComponent;
  let fixture: ComponentFixture<PopularLoansCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularLoansCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularLoansCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
