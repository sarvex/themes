import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefooterAreasComponent } from './prefooter-areas.component';

describe('PrefooterAreasComponent', () => {
  let component: PrefooterAreasComponent;
  let fixture: ComponentFixture<PrefooterAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefooterAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefooterAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
