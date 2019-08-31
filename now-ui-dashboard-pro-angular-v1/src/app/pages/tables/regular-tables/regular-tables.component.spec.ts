import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RegularTablesComponent } from "./regular-tables.component";

describe("RegularTablesComponent", () => {
  let component: RegularTablesComponent;
  let fixture: ComponentFixture<RegularTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegularTablesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
