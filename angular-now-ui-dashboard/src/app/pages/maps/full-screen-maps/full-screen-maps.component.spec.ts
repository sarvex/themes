import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FullScreenMapsComponent } from "./full-screen-maps.component";

describe("FullScreenMapsComponent", () => {
  let component: FullScreenMapsComponent;
  let fixture: ComponentFixture<FullScreenMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenMapsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
