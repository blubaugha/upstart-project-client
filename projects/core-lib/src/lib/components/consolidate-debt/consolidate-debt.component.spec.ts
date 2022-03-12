import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidateDebtComponent } from './consolidate-debt.component';

describe('ConsolidateDebtComponent', () => {
  let component: ConsolidateDebtComponent;
  let fixture: ComponentFixture<ConsolidateDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidateDebtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidateDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
