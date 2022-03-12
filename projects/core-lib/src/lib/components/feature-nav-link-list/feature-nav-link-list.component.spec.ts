import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNavLinkListComponent } from './feature-nav-link-list.component';

describe('FeatureNavLinkListComponent', () => {
  let component: FeatureNavLinkListComponent;
  let fixture: ComponentFixture<FeatureNavLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [FeatureNavLinkListComponent]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNavLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
