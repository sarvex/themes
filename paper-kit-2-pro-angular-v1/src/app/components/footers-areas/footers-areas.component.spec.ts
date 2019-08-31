import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersAreasComponent } from './footers-areas.component';

describe('FootersAreasComponent', () => {
  let component: FootersAreasComponent;
  let fixture: ComponentFixture<FootersAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootersAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
