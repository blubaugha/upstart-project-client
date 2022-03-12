import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRefinanceComponent } from './auto-refinance.component';

describe('AutoRefinanceComponent', () => {
  let component: AutoRefinanceComponent;
  let fixture: ComponentFixture<AutoRefinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoRefinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
