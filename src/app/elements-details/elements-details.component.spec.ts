import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsDetailsComponent } from './elements-details.component';

describe('ElementsDetailsComponent', () => {
  let component: ElementsDetailsComponent;
  let fixture: ComponentFixture<ElementsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
