import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VectorMapComponent } from "./vector-map.component";

describe("VectorMapComponent", () => {
  let component: VectorMapComponent;
  let fixture: ComponentFixture<VectorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VectorMapComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
