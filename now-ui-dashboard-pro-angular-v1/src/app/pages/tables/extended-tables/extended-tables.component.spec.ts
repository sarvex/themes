import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExtendedTablesComponent } from "./extended-tables.component";

describe("ExtendedTablesComponent", () => {
  let component: ExtendedTablesComponent;
  let fixture: ComponentFixture<ExtendedTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedTablesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
