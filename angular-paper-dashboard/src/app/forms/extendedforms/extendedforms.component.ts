import { Component, OnInit } from '@angular/core';

declare var require: any
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'extendedforms-cmp',
    templateUrl: 'extendedforms.component.html'
})

export class ExtendedFormsComponent implements OnInit{
    state_default: boolean = true;
    state_plain: boolean = true;
    state_with_icons: boolean = true;
    tagItems = ['Amsterdam', 'Washington', 'Sydney', 'Beijing'];
    model: Date;
    model2: Date;
    ngOnInit() {
      this.model = new Date();
      this.model2 = new Date();
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();

        var tagClass = $('.tagsinput').data('color');

        if ($(".tagsinput").length != 0) {
          $('.tagsinput').tagsinput();
        }

        $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');

        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
          $(".selectpicker").selectpicker({
            iconBase: "nc-icon",
            tickIcon: "nc-check-2"
          });
        }

        if ($(".datetimepicker").length != 0) {
          $('.datetimepicker').datetimepicker({
            icons: {
              time: "fa fa-clock-o",
              date: "fa fa-calendar",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove'
            },
            debug: true
          });
        }

        if ($(".datepicker").length != 0) {
          $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
              time: "fa fa-clock-o",
              date: "fa fa-calendar",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove'
            },
            debug: true
          });
        }

        if ($(".timepicker").length != 0) {
          $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A', //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
              time: "fa fa-clock-o",
              date: "fa fa-calendar",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove'
            },
            debug: true
          });
        }

        var noUiSlider = require('nouislider');
        var sliderRegular = document.getElementById('sliderRegular');

        noUiSlider.create(sliderRegular, {
            start: 40,
            connect: [true,false],
            range: {
                min: 0,
                max: 100
            }
        });

        var sliderDouble = document.getElementById('sliderDouble');

        noUiSlider.create(sliderDouble, {
            start: [ 20, 60 ],
            connect: true,
            range: {
                min:  0,
                max:  100
            }
        });
    }
}
