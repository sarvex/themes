import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit, OnDestroy {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};

    data : Date = new Date();

    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.dropdownList = [
                              {"id":1,"itemName":"Bahasa Indonesia"},
                              {"id":2,"itemName":"Bahasa Melayu"},
                              {"id":3,"itemName":"Català"},
                              {"id":4,"itemName":"Dansk"},
                              {"id":5,"itemName":"Deutsch"},
                              {"id":6,"itemName":"English"},
                              {"id":7,"itemName":"Español"},
                              {"id":8,"itemName":"Eλληνικά"},
                              {"id":9,"itemName":"Français"},
                              {"id":10,"itemName":"Italiano"},
                              {"id":11,"itemName":"Magyar"},
                              {"id":12,"itemName":"Nederlands"},
                              {"id":13,"itemName":"Norsk"},
                              {"id":14,"itemName":"Polski"},
                              {"id":15,"itemName":"Português"},
                              {"id":16,"itemName":"Suomi"},
                              {"id":17,"itemName":"Svenska"},
                              {"id":18,"itemName":"Türkçe"},
                              {"id":19,"itemName":"Íslenska"},
                              {"id":20,"itemName":"Čeština"},
                              {"id":21,"itemName":"Русский"},
                              {"id":22,"itemName":"ภาษาไทย"},
                              {"id":23,"itemName":"中文 (简体)"},
                              {"id":24,"itemName":"中文 (繁體)"},
                              {"id":25,"itemName":"日本語"},
                              {"id":26,"itemName":"한국어"}
                            ];
        this.selectedItems = [
            {"id":4,"itemName":"Dansk"}
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
                              {"id":1,"itemName":"ARS"},
                              {"id":2,"itemName":"AUD"},
                              {"id":3,"itemName":"BRL"},
                              {"id":4,"itemName":"CAD"},
                              {"id":5,"itemName":"CHF"},
                              {"id":6,"itemName":"CNY"},
                              {"id":7,"itemName":"CZK"},
                              {"id":8,"itemName":"DKK"},
                              {"id":9,"itemName":"EUR"},
                              {"id":10,"itemName":"GBP"},
                              {"id":11,"itemName":"HKD"},
                              {"id":12,"itemName":"HUF"},
                              {"id":13,"itemName":"IDR"},
                              {"id":14,"itemName":"ILS"},
                              {"id":15,"itemName":"INR"},
                              {"id":16,"itemName":"JPY"},
                              {"id":17,"itemName":"KRW"},
                              {"id":18,"itemName":"MYR"},
                              {"id":19,"itemName":"MXN"},
                              {"id":20,"itemName":"NOK"},
                              {"id":21,"itemName":"NZD"},
                              {"id":22,"itemName":"PHP"},
                              {"id":23,"itemName":"PLN"},
                              {"id":24,"itemName":"RUB"},
                              {"id":25,"itemName":"SEK"},
                              {"id":26,"itemName":"SGD"},
                              {"id":27,"itemName":"TWD"},
                              {"id":28,"itemName":"USD"},
                              {"id":29,"itemName":"VND"},
                              {"id":30,"itemName":"ZAR"}
                            ];
        this.selectedItems1 = [
            {"id":28,"itemName":"USD"}
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
        body.classList.remove('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        body.classList.remove('navbar-transparent');
    }
}
