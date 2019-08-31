import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-ngx-datatable",
  templateUrl: "./ngx-datatable.component.html",
  styleUrls: ["./ngx-datatable.component.css"]
})
export class NgxDatatableComponent implements OnInit {
  test: any =  `<button (click)="onSelect($event)">Click me</button>`;
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63"
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66"
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22"
    },
    { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: "33" },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61"
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59"
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55"
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39"
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23"
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "30"
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "22"
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "36"
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "43"
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: "19"
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "66"
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "64"
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59"
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41"
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35"
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: "30"
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: "40"
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: "21"
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      age: "23"
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: "47"
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      age: "42"
    },
    {
      name: "Jennifer Chang",
      position: "Regional Director",
      office: "Singapore",
      age: "28"
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      age: "28"
    },
    {
      name: "Fiona Green",
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: "48"
    },
    {
      name: "Shou Itou",
      position: "Regional Marketing",
      office: "Tokyo",
      age: "20"
    },
    {
      name: "Michelle House",
      position: "Integration Specialist",
      office: "Sidney",
      age: "37"
    },
    { name: "Suki Burks", position: "Developer", office: "London", age: "53" },
    {
      name: "Prescott Bartlett",
      position: "Technical Author",
      office: "London",
      age: "27"
    },
    {
      name: "Gavin Cortez",
      position: "Team Leader",
      office: "San Francisco",
      age: "22"
    },
    {
      name: "Martena Mccray",
      position: "Post-Sales support",
      office: "Edinburgh",
      age: "46"
    },
    {
      name: "Unity Butler",
      position: "Marketing Designer",
      office: "San Francisco",
      age: "47"
    },
    {
      name: "Howard Hatfield",
      position: "Office Manager",
      office: "San Francisco",
      age: "51"
    },
    {
      name: "Hope Fuentes",
      position: "Secretary",
      office: "San Francisco",
      age: "41"
    },
    {
      name: "Vivian Harrell",
      position: "Financial Controller",
      office: "San Francisco",
      age: "62"
    },
    {
      name: "Timothy Mooney",
      position: "Office Manager",
      office: "London",
      age: "37"
    },
    {
      name: "Jackson Bradshaw",
      position: "Director",
      office: "New York",
      age: "65"
    },
    {
      name: "Olivia Liang",
      position: "Support Engineer",
      office: "Singapore",
      age: "64"
    }
  ];

  constructor() {
    this.temp = this.rows.map((prop,key)=>{
      return {
        ...prop,
        id: key
      };

    });
  }
  entriesChange($event){
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {

      for(var key in d){
        if(d[key].toLowerCase().indexOf(val) !== -1){
          return true;
        }
      }
      return false;
    });
  }
  onSelect($event) {
   console.log('Select Event', $event);
 }
 onActivate(event) {
    this.activeRow = event.row;
  }
  likeFunction($event){
    $event.preventDefault();
    let details = "You've clicked LIKE button on \n{\n";
    for(var key in this.activeRow){
      details += key + ": " + this.activeRow[key] + "\n";
    }
    details += "}.";
    alert(details);
  }
  editFunction($event){
    $event.preventDefault();
    let details = "You've clicked EDIT button on \n{\n";
    for(var key in this.activeRow){
      details += key + ": " + this.activeRow[key] + "\n";
    }
    details += "}.";
    alert(details);
  }
  deleteFunction($event){
    $event.preventDefault();
    this.temp = this.rows.filter(entry => entry.id !== this.activeRow.id);
  }
  ngOnInit() {}
}
