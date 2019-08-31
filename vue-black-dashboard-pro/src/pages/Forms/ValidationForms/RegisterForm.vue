<template>
  <form>
    <card footer-classes="text-right">
      <div slot="header"><h4 class="card-title">Register Form</h4></div>
      <div>
        <base-input
          type="email"
          required
          name="email"
          label="Email address"
          v-validate="modelValidations.email"
          :error="getError('email')"
          v-model="model.email"
        >
        </base-input>

        <base-input
          label="Password"
          required
          type="password"
          name="password"
          v-validate="modelValidations.password"
          :error="getError('password')"
          v-model="model.password"
        >
        </base-input>

        <base-input
          label="Confirm Password"
          required
          type="password"
          name="confirm"
          v-validate="modelValidations.confirmPassword"
          :error="getError('confirm')"
          v-model="model.confirmPassword"
        >
        </base-input>
        <div class="category form-category">* Required fields</div>
      </div>
      <template slot="footer" class="text-right">
        <base-checkbox
          v-model="model.subscribe"
          class="pull-left"
          name="subscribe"
        >
          Accept terms & conditions
        </base-checkbox>
        <base-button
          native-type="submit"
          @click.prevent="validate"
          type="primary"
          >Register</base-button
        >
      </template>
    </card>
  </form>
</template>
<script>
import { BaseCheckbox } from 'src/components/index';

export default {
  components: {
    BaseCheckbox
  },
  data() {
    return {
      model: {
        email: '',
        password: '',
        confirmPassword: '',
        subscribe: false
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
          confirmed: 'password'
        },
        subscribe: {
          required: true
        }
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit('on-submit', this.registerForm, isValid);
      });
    }
  }
};
</script>
<style></style>
