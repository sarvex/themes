import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPluginComponent } from './fixed-plugin.component';

describe('FixedPluginComponent', () => {
  let component: FixedPluginComponent;
  let fixture: ComponentFixture<FixedPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
