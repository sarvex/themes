import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAreasComponent } from './comments-areas.component';

describe('CommentsAreasComponent', () => {
  let component: CommentsAreasComponent;
  let fixture: ComponentFixture<CommentsAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
