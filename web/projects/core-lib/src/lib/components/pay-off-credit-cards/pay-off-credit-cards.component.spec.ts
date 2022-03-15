import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOffCreditCardsComponent } from './pay-off-credit-cards.component';

describe('PayOffCreditCardsComponent', () => {
  let component: PayOffCreditCardsComponent;
  let fixture: ComponentFixture<PayOffCreditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayOffCreditCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOffCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
