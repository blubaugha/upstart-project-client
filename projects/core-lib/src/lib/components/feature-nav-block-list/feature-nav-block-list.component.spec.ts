import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNavBlockListComponent } from './feature-nav-block-list.component';

describe('FeatureNavBlockListComponent', () => {
  let component: FeatureNavBlockListComponent;
  let fixture: ComponentFixture<FeatureNavBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNavBlockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNavBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
