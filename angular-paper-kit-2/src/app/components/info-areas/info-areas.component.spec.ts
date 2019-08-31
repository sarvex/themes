import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAreasComponent } from './info-areas.component';

describe('InfoAreasComponent', () => {
  let component: InfoAreasComponent;
  let fixture: ComponentFixture<InfoAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
