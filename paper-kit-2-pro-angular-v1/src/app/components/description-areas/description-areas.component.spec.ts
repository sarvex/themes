import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAreasComponent } from './description-areas.component';

describe('DescriptionAreasComponent', () => {
  let component: DescriptionAreasComponent;
  let fixture: ComponentFixture<DescriptionAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
