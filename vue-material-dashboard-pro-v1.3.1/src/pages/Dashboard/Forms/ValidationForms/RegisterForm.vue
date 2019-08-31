<template>
  <form>
    <md-card>
      <md-card-header class="md-card-header-icon md-card-header-green">
        <div class="card-icon">
          <md-icon>mail_outline</md-icon>
        </div>
        <h4 class="title">Register Form</h4>
      </md-card-header>

      <md-card-content>
        <md-field
          :class="[
            { 'md-valid': !errors.has('email') && touched.email },
            { 'md-error': errors.has('email') }
          ]"
        >
          <label>Email Adress</label>
          <md-input
            v-model="email"
            data-vv-name="email"
            type="email"
            required
            v-validate="modelValidations.email"
          >
          </md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('email')">close</md-icon>
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon
              class="success"
              v-show="!errors.has('email') && touched.email"
              >done</md-icon
            >
          </slide-y-down-transition>
        </md-field>
        <md-field
          :class="[
            { 'md-valid': !errors.has('password') && touched.password },
            { 'md-error': errors.has('password') }
          ]"
        >
          <label>Password</label>
          <md-input
            v-model="password"
            data-vv-name="password"
            type="password"
            ref="password"
            required
            v-validate="modelValidations.password"
          >
          </md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('password')"
              >close</md-icon
            >
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon
              class="success"
              v-show="!errors.has('password') && touched.password"
              >done</md-icon
            >
          </slide-y-down-transition>
        </md-field>
        <md-field
          :class="[
            {
              'md-valid': !errors.has('confirmPassword') && touched.confirmPass
            },
            { 'md-error': errors.has('confirmPassword') }
          ]"
        >
          <label>Confirm Password</label>
          <md-input
            v-model="confirmPassword"
            data-vv-name="confirmPassword"
            data-vv-as="password"
            type="password"
            required
            v-validate="modelValidations.confirmPassword"
          >
          </md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('confirmPassword')"
              >close</md-icon
            >
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon
              class="success"
              v-show="!errors.has('confirmPassword') && touched.confirmPassword"
              >done</md-icon
            >
          </slide-y-down-transition>
        </md-field>
        <div class="form-category">* Required fields</div>
      </md-card-content>

      <md-card-actions md-alignment="space-between">
        <md-checkbox v-model="boolean">Subscribe to newsletter</md-checkbox>
        <md-button
          native-type="submit"
          @click.native.prevent="validate"
          class="md-success"
          >Register</md-button
        >
      </md-card-actions>
    </md-card>
  </form>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      boolean: null,
      email: "",
      password: "",
      confirmPassword: "",
      touched: {
        email: false,
        password: false,
        confirmPass: false
      },
      modelValidations: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          min: 5
        },
        confirmPassword: {
          required: true,
          confirmed: "password"
        }
      }
    };
  },
  methods: {
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit("on-submit", this.registerForm, isValid);
      });
    }
  },
  watch: {
    email() {
      this.touched.email = true;
    },
    password() {
      this.touched.password = true;
    },
    confirmPassword() {
      this.touched.confirmPass = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}
</style>
