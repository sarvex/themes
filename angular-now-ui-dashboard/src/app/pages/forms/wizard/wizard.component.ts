import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.css"]
})
export class WizardComponent implements OnInit, OnDestroy, AfterViewInit {
  private focus;
  private focusTouched;
  private focus1;
  private focus1Touched;
  private focus2;
  private focus2Touched;

  private choice1 = false;
  private choice2 = false;
  private choice3 = false;

  private cardWizard: any;

  private dropdownList1 = [];
  private selectedItems1 = [];
  private dropdownSettings1 = {};

  private width: any = 100 / 3 + "%";
  private movingTabStyle = {width: "0px", transform: "translate3d(0px, 0px, 0px)"};
  private movingTabHTML = `<i class="now-ui-icons users_circle-08"></i> About`;
  private currentIndex = 0;
  private isValid = false;
  private enters = 0;

  private step1Form: FormGroup;

  @ViewChild("myWizard") myWizard: any;
  @ViewChild("input") input: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.step1Form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
    });

    this.movingTabStyle.width = (this.myWizard.nativeElement.clientWidth -30) / 3 + "px";
    this.dropdownList1 = [
      { id: 1, itemName: "Roman" },
      { id: 2, itemName: "Paris" },
      { id: 3, itemName: "Bucharest" },
      { id: 4, itemName: "Rome" },
      { id: 5, itemName: "New York" },
      { id: 6, itemName: "Miami" },
      { id: 7, itemName: "Piatra Neamt" },
      { id: 8, itemName: "Paris" },
      { id: 9, itemName: "Bucharest" },
      { id: 10, itemName: "Rome" },
      { id: 11, itemName: "New York" },
      { id: 12, itemName: "Miami" },
      { id: 13, itemName: "Piatra Neamt" }
    ];
    this.selectedItems1 = [];
    this.dropdownSettings1 = {
      singleSelection: true,
      text: "Single Select",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: ""
    };
  }
  get step1() {
    return this.step1Form.controls;
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  ngAfterViewInit() {
    window.addEventListener("resize", this.updateWidth.bind(this));
    let id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }

    this.cardWizard = document.getElementsByClassName("card-wizard")[0];
    this.cardWizard.classList.add("active");
  }
  updateWidth() {
    console.log('hey')
    setTimeout(() => this.refreshAnimation(this.currentIndex), 200);
  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.updateWidth);
    this.cardWizard.classList.remove("active");
  }
  validateFirst(index){
    if(this.enters > 0){
      this.isValid = true;
    }
    this.enters++;
    if (this.step1Form.invalid) {
        return;
    }
    this.refreshAnimation(index);
  }
  refreshAnimation(index) {
    this.currentIndex = index;
    switch(index) {
       case 0: {
          this.movingTabHTML=`<i class="now-ui-icons users_circle-08"></i> About`;
          break;
       }
       case 1: {
          this.movingTabHTML=`<i class="now-ui-icons ui-1_settings-gear-63"></i>Account`;
          break;
       }
       case 2: {
          this.movingTabHTML=`<i class="now-ui-icons ui-1_email-85"></i>Address`;
          break;
       }
       default: {
          //statements;
          break;
       }
    }
    let total = 3;
    let li_width = 100 / total;

    let total_steps = 3;
    let move_distance =
      (this.myWizard.nativeElement.clientWidth -30) / total_steps;
    let index_temp = index;
    let vertical_level = 0;

    let mobile_device = window.innerWidth < 600 && total > 3;

    if (mobile_device) {
      move_distance = (this.myWizard.nativeElement.clientWidth -30) / 2;
      index_temp = index % 2;
      li_width = 50;
    }

    let step_width: any = move_distance + "px";

    move_distance = move_distance * index_temp;

    if (mobile_device) {
      vertical_level = parseInt(index) / 2;
      vertical_level = vertical_level * 38;
    }
    this.movingTabStyle = {
      width: step_width,
      transform:
        "translate3d(" + move_distance + "px, " + vertical_level + "px, 0)"
    };
  }
}
