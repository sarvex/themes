import { Component } from '@angular/core';
import Swal from 'sweetalert2';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'sweetalert-cmp',
    templateUrl: 'sweetalert.component.html'
})

export class SweetAlertComponent{

  showSwal(type) {
    if (type == 'basic') {
        Swal.fire({
            title: "Here's a message!",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
        })

    } else if (type == 'title-and-text') {
        Swal.fire({
            title: "Here's a message!",
            text: "It's pretty, isn't it?",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-info"
        })

    } else if (type == 'success-message') {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            type: "success"
        })

    } else if (type == 'warning-message-and-confirmation') {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          confirmButtonText: 'Yes, delete it!',
           buttonsStyling: false
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              {
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                type: 'success',
                confirmButtonClass: "btn btn-success",
                buttonsStyling: false
              }
            )
          }
        })
    } else if (type == 'warning-message-and-cancel') {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonClass: "btn btn-success",
            cancelButtonClass: "btn btn-danger",
            buttonsStyling: false
        }).then((result) => {
          if (result.value) {
            Swal.fire({
                title: 'Deleted!',
                text: 'Your imaginary file has been deleted.',
                type: 'success',
                confirmButtonClass: "btn btn-success",
                buttonsStyling: false
            })
          } else {
            Swal.fire({
                title: 'Cancelled',
                text: 'Your imaginary file is safe :)',
                type: 'error',
                confirmButtonClass: "btn btn-info",
                buttonsStyling: false
            })
          }
        })

    } else if (type == 'custom-html') {
        Swal.fire({
            title: 'HTML example',
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            html: 'You can use <b>bold text</b>, ' +
                '<a href="https://github.com">links</a> ' +
                'and other HTML tags'
        })

    } else if (type == 'auto-close') {
        Swal.fire({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        })
    } else if (type == 'input-field') {
        Swal.fire({
            title: 'Input something',
            html: '<div class="form-group">' +
                '<input id="input-field" type="text" class="form-control" />' +
                '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function(result) {
            Swal.fire({
                type: 'success',
                html: 'You entered: <strong>' +
                    $('#input-field').val() +
                    '</strong>',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false

            })
        })
      }
    }
}
