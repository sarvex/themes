import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAreasComponent } from './cards-areas.component';

describe('CardsAreasComponent', () => {
  let component: CardsAreasComponent;
  let fixture: ComponentFixture<CardsAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
