import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSetComponent } from './feature-set.component';

describe('FeatureSetComponent', () => {
  let component: FeatureSetComponent;
  let fixture: ComponentFixture<FeatureSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
