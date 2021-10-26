import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCarComponent } from './compare-car.component';

describe('CompareCarComponent', () => {
  let component: CompareCarComponent;
  let fixture: ComponentFixture<CompareCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
