import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampareComponent } from './campare.component';

describe('CampareComponent', () => {
  let component: CampareComponent;
  let fixture: ComponentFixture<CampareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
