import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page422Component } from './page422.component';

describe('Page422Component', () => {
  let component: Page422Component;
  let fixture: ComponentFixture<Page422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
