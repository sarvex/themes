<template>
  <div>
    <div class="header text-center">
      <h3 class="title">Sweet Alert 2</h3>
      <p class="category">
        A beautiful plugin, that replace the classic alert, Handcrafted by our
        friend
        <a target="_blank" href="https://twitter.com/t4t5">Tristan Edwards</a>.
        Please checkout the
        <a href="https://github.com/sweetalert2/sweetalert2" target="_blank"
          >full documentation.</a
        >
      </p>
    </div>
    <div class="places-sweet-alerts">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">Basic example</h5>
              <md-button class="md-success" @click.native="showSwal('basic')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">A title with a text under</h5>
              <md-button
                class="md-success"
                @click.native="showSwal('title-and-text')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">A success message</h5>
              <md-button
                class="md-success"
                @click.native="showSwal('success-message')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">Custom HTML description</h5>
              <md-button
                class="md-success"
                @click.native="showSwal('custom-html')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">
                A warning message, with a function attached to the "Confirm"
                Button...
              </h5>
              <md-button
                class="md-success"
                @click.native="showSwal('warning-message-and-confirmation')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">
                ...and by passing a parameter, you can execute something else
                for "Cancel"
              </h5>
              <md-button
                class="md-success"
                @click.native="showSwal('warning-message-and-cancel')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">
                A message with auto close timer set to 2 seconds
              </h5>
              <md-button
                class="md-success"
                @click.native="showSwal('auto-close')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
        <div
          class="md-layout-item md-size-25 md-medium-size-50 md-xsmall-size-100"
        >
          <md-card>
            <md-card-content class="text-center">
              <h5 class="card-text">Modal window with input field</h5>
              <md-button
                class="md-success"
                @click.native="showSwal('input-field')"
                >Try me!</md-button
              >
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import $ from "jquery";
export default {
  methods: {
    showSwal(type) {
      if (type === "basic") {
        Swal.fire({
          title: `Here's a message!`,
          buttonsStyling: false,
          confirmButtonClass: "md-button md-success"
        });
      } else if (type === "title-and-text") {
        Swal.fire({
          title: `Here's a message!`,
          text: `It's pretty, isn't it?`,
          buttonsStyling: false,
          confirmButtonClass: "md-button md-info"
        });
      } else if (type === "success-message") {
        Swal.fire({
          title: `Good job!`,
          text: "You clicked the button!",
          buttonsStyling: false,
          confirmButtonClass: "md-button md-success",
          type: "success"
        });
      } else if (type === "warning-message-and-confirmation") {
        Swal.fire({
          title: "Are you sure?",
          text: `You won't be able to revert this!`,
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "md-button md-success",
          cancelButtonClass: "md-button md-danger",
          confirmButtonText: "Yes, delete it!",
          buttonsStyling: false
        }).then(result => {
          if (result.value) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              type: "success",
              confirmButtonClass: "md-button md-success",
              buttonsStyling: false
            });
          }
        });
      } else if (type === "warning-message-and-cancel") {
        Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, keep it",
          confirmButtonClass: "md-button md-success",
          cancelButtonClass: "md-button md-danger",
          buttonsStyling: false
        }).then(result => {
          if (result.value) {
            Swal.fire({
              title: "Deleted!",
              text: "Your imaginary file has been deleted.",
              type: "success",
              confirmButtonClass: "md-button md-success",
              buttonsStyling: false
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              type: "error",
              confirmButtonClass: "md-button md-info",
              buttonsStyling: false
            });
          }
        });
      } else if (type === "custom-html") {
        Swal.fire({
          title: "HTML example",
          buttonsStyling: false,
          confirmButtonClass: "md-button md-success",
          html: `You can use <b>bold text</b>,
            <a href="http://github.com">links</a>
            and other HTML tags`
        });
      } else if (type === "auto-close") {
        Swal.fire({
          title: "Auto close alert!",
          text: "I will close in 2 seconds.",
          timer: 2000,
          showConfirmButton: false
        });
      } else if (type === "input-field") {
        Swal.fire({
          title: "Input something",
          html: `<div class="md-field md-theme-default">
            <input type="text" id="md-input" class="md-input">
            </div>`,
          showCancelButton: true,
          confirmButtonClass: "md-button md-success",
          cancelButtonClass: "md-button md-danger",
          buttonsStyling: false
        }).then(() => {
          Swal.fire({
            type: "success",
            html: "You entered: <strong>" + $("#md-input").val() + "</strong>",
            confirmButtonClass: "md-button md-success",
            buttonsStyling: false
          });
        });
      }
    }
  }
};
</script>
<style scoped>
.text-center {
  text-align: center;
}

h5 {
  margin-top: 0;
}
</style>
