<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <register-form @on-submit="onRegisterSubmit"></register-form>
    </div>
    <div class="md-layout-item md-small-size-100">
      <login-form @on-submit="onLoginSubmit"></login-form>
    </div>
    <div class="md-layout-item md-size-100">
      <type-validation-form
        @on-submit="onTypeValidationSubmit"
      ></type-validation-form>
    </div>
    <div class="md-layout-item md-size-100">
      <range-validation-form
        @on-submit="onRangeValidationSubmit"
      ></range-validation-form>
    </div>
  </div>
</template>
<script>
import RegisterForm from "./ValidationForms/RegisterForm.vue";
import LoginForm from "./ValidationForms/LoginForm.vue";
import TypeValidationForm from "./ValidationForms/TypeValidationForm.vue";
import RangeValidationForm from "./ValidationForms/RangeValidationForm";

export default {
  components: {
    LoginForm,
    RegisterForm,
    TypeValidationForm,
    RangeValidationForm
  },
  data() {
    return {
      loginModel: {},
      registerModel: {},
      typeValidationModel: {},
      rangeValidationModel: {}
    };
  },
  methods: {
    onRegisterSubmit(model) {
      this.registerModel = model;
    },
    onLoginSubmit(model) {
      this.loginModel = model;
    },
    onTypeValidationSubmit(model) {
      this.typeValidationModel = model;
    },
    onRangeValidationSubmit(model) {
      this.rangeValidationModel = model;
    }
  }
};
</script>
<style></style>
