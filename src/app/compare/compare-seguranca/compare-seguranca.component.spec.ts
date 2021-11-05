import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareSegurancaComponent } from './compare-seguranca.component';

describe('SegurancaComponent', () => {
  let component: CompareSegurancaComponent;
  let fixture: ComponentFixture<CompareSegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareSegurancaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
