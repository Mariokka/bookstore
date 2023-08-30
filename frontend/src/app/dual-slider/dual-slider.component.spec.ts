import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualSliderComponent } from './dual-slider.component';

describe('DualSliderComponent', () => {
  let component: DualSliderComponent;
  let fixture: ComponentFixture<DualSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DualSliderComponent]
    });
    fixture = TestBed.createComponent(DualSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
