import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareConfortoComponent } from './compare-conforto.component';

describe('ConfortoComponent', () => {
  let component: CompareConfortoComponent;
  let fixture: ComponentFixture<CompareConfortoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareConfortoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareConfortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
