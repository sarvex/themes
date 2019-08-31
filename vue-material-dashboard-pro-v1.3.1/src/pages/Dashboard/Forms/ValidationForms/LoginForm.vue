<template>
  <form>
    <md-card>
      <md-card-header class="md-card-header-icon md-card-header-green">
        <div class="card-icon">
          <md-icon>contacts</md-icon>
        </div>
        <h4 class="title">Login Form</h4>
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
            { 'md-error': errors.has('password') },
            { 'md-valid': !errors.has('password') && touched.password }
          ]"
        >
          <label>Password</label>
          <md-input
            v-model="password"
            data-vv-name="password"
            type="password"
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
      </md-card-content>

      <md-card-actions>
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
      email: "",
      password: "",
      touched: {
        email: false,
        password: false
      },
      modelValidations: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          min: 5
        }
      }
    };
  },
  methods: {
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit("on-submit", this.registerForm, isValid);
      });

      this.touched.email = true;
      this.touched.password = true;
    }
  },
  watch: {
    email() {
      this.touched.email = true;
    },
    password() {
      this.touched.password = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}
</style>
