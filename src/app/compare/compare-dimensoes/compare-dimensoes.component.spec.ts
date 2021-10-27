import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareDimensoesComponent } from './compare-dimensoes.component';

describe('CompareCompareDimensoesComponent', () => {
  let component: CompareDimensoesComponent;
  let fixture: ComponentFixture<CompareDimensoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareDimensoesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareDimensoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
