<template>
  <div class="places-sweet-alerts">
    <h2 class="text-center">Sweet Alert</h2>
    <p class="category text-center">
      A beautiful plugin, that replace the classic alert, Handcrafted by our
      friend
      <a target="_blank" href="https://twitter.com/t4t5">Tristan Edwards</a>.
      Please check out the
      <a href="https://sweetalert2.github.io/" target="_blank"
        >full documentation.</a
      >
    </p>
    <div class="row mt-5">
      <div class="col-md-3 ml-auto">
        <card>
          <div class="text-center">
            <p class="card-text">Basic example</p>
            <base-button type="primary" @click.native="showSwal('basic')"
              >Try me!</base-button
            >
          </div>
        </card>
      </div>
      <div class="col-md-3 ml-auto">
        <card>
          <div class="text-center">
            <p class="card-text">Custom HTML description</p>
            <base-button type="primary" @click.native="showSwal('custom-html')"
              >Try me!</base-button
            >
          </div>
        </card>
      </div>
      <div class="col-md-3 ml-auto">
        <card>
          <div class="text-center">
            <p class="card-text">Modal window with input field</p>
            <base-button type="primary" @click.native="showSwal('input-field')"
              >Try me!</base-button
            >
          </div>
        </card>
      </div>

      <div class="col-md-3 ml-auto">
        <card>
          <div class="text-center">
            <p class="card-text">
              A message with auto close timer set to 2 seconds
            </p>
            <base-button type="primary" @click.native="showSwal('auto-close')"
              >Try me!</base-button
            >
          </div>
        </card>
      </div>

      <div class="col-md-3 mr-auto">
        <card>
          <div class="text-center">
            <p class="card-text">A success message</p>
            <base-button
              type="primary"
              @click.native="showSwal('success-message')"
              >Try me!</base-button
            >
          </div>
        </card>
      </div>

      <div class="col-md-3 mr-auto">
        <card>
          <div class="text-center">
            <p class="card-text">A title with a text under</p>
            <base-button
              type="primary"
              @click.native="showSwal('title-and-text')"
              >Try me!</base-button
            >
          </div>
        </card>
      </div>

      <div class="col-md-3 mr-auto">
        <card>
          <div class="text-center">
            <p class="card-text">
              A warning message, with a function attached to the "Confirm"
              Button...
            </p>
            <base-button
              type="primary"
              @click.native="showSwal('warning-message-and-confirmation')"
              >Try me!
            </base-button>
          </div>
        </card>
      </div>

      <div class="col-md-3 mr-auto">
        <card>
          <div class="text-center">
            <p class="card-text">
              ...and by passing a parameter, you can execute something else for
              "Cancel"
            </p>
            <base-button
              type="primary"
              @click.native="showSwal('warning-message-and-cancel')"
              >Try me!</base-button
            >
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert2';

export default {
  methods: {
    showSwal(type) {
      if (type === 'basic') {
        swal({
          title: `Here's a message!`,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success btn-fill'
        });
      } else if (type === 'title-and-text') {
        swal({
          title: `Here's a message!`,
          text: `It's pretty, isn't it?`,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-info btn-fill'
        });
      } else if (type === 'success-message') {
        swal({
          title: `Good job!`,
          text: 'You clicked the button!',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success btn-fill',
          type: 'success'
        });
      } else if (type === 'warning-message-and-confirmation') {
        swal({
          title: 'Are you sure?',
          text: `You won't be able to revert this!`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          confirmButtonText: 'Yes, delete it!',
          buttonsStyling: false
        }).then(() => {
          swal({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false
          });
        });
      } else if (type === 'warning-message-and-cancel') {
        swal({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it',
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          buttonsStyling: false
        }).then(
          () => {
            swal({
              title: 'Deleted!',
              text: 'Your imaginary file has been deleted.',
              type: 'success',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false
            });
          },
          dismiss => {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
              swal({
                title: 'Cancelled',
                text: 'Your imaginary file is safe :)',
                type: 'error',
                confirmButtonClass: 'btn btn-info btn-fill',
                buttonsStyling: false
              });
            }
          }
        );
      } else if (type === 'custom-html') {
        swal({
          title: 'HTML example',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success btn-fill',
          html: `You can use <b>bold text</b>,
            <a href="http://github.com">links</a>
            and other HTML tags`
        });
      } else if (type === 'auto-close') {
        swal({
          title: 'Auto close alert!',
          text: 'I will close in 2 seconds.',
          timer: 2000,
          showConfirmButton: false
        });
      } else if (type === 'input-field') {
        swal({
          title: 'Input something',
          html: `<div class="form-group">
            <input id="input-field" type="text" class="form-control" />
            </div>`,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          buttonsStyling: false
        })
          .then(() => {
            swal({
              type: 'success',
              html: 'You entered',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false
            });
          })
          .catch(swal.noop);
      }
    }
  }
};
</script>
<style>
.el-dialog {
  width: 50%;
}

@media (max-width: 800px) {
  .el-dialog {
    width: 90%;
  }
}
</style>
