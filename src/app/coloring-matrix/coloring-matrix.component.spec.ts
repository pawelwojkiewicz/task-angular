import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoringMatrixComponent } from './coloring-matrix.component';

describe('ColoringMatrixComponent', () => {
  let component: ColoringMatrixComponent;
  let fixture: ComponentFixture<ColoringMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoringMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoringMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
