import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanNavLinkListComponent } from './loan-nav-link-list.component';

describe('LoanNavLinkListComponent', () => {
  let component: LoanNavLinkListComponent;
  let fixture: ComponentFixture<LoanNavLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [LoanNavLinkListComponent]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanNavLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
