import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMecanicaComponent } from './compare-mecanica.component';

describe('CompareMecanicaComponent', () => {
  let component: CompareMecanicaComponent;
  let fixture: ComponentFixture<CompareMecanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareMecanicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareMecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
