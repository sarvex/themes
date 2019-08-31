import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
    data : Date = new Date();

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};

    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('product-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.add('bg-danger');

        this.dropdownList = [
                              {"id":1,"itemName":"Black"},
                              {"id":2,"itemName":"Gray"},
                              {"id":3,"itemName":"White"}
                            ];
        this.selectedItems = [
            {"id":1,"itemName":"Black"}
        ];
        this.dropdownSettings = {
                                  singleSelection: true,
                                  text:"Select language",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:""
                                };
        this.dropdownList1 = [
                              {"id":1,"itemName":"Small"},
                              {"id":2,"itemName":"Medium"},
                              {"id":3,"itemName":"Large"}
                            ];
        this.selectedItems1 = [
            {"id":1,"itemName":"Small"},
        ];
        this.dropdownSettings1 = {
                                  singleSelection: true,
                                  text:"Select currency",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:""
                                };
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('product-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('bg-danger');
    }
}
