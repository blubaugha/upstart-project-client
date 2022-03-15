import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanNavBlockListComponent } from './loan-nav-block-list.component';

describe('LoanNavBlockListComponent', () => {
  let component: LoanNavBlockListComponent;
  let fixture: ComponentFixture<LoanNavBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanNavBlockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanNavBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
