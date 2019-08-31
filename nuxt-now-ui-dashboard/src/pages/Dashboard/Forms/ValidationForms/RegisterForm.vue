<template>
  <form>
    <card no-footer-line>
      <div slot="header">
        <h4 class="card-title">
          Register Form
        </h4>
      </div>
      <div>
        <fg-input type="email"
                  required
                  name="email"
                  label="Email address"
                  v-validate="modelValidations.email"
                  :error="getError('email')"
                  v-model="model.email">
        </fg-input>

        <fg-input label="Password"
                  required
                  type="password"
                  name="password"
                  v-validate="modelValidations.password"
                  :error="getError('password')"
                  v-model="model.password">
        </fg-input>

        <fg-input label="Confirm Password"
                  required
                  type="password"
                  name="confirm"
                  v-validate="modelValidations.confirmPassword"
                  :error="getError('confirm')"
                  v-model="model.confirmPassword">
        </fg-input>
        <div class="category form-category">* Required fields</div>

      </div>
      <div slot="footer" class="text-right">
        <checkbox v-model="model.subscribe"
                  class="pull-left"
                  name="subscribe">
          Subscribe to newsletter
        </checkbox>
        <n-button native-type="submit" @click.native.prevent="validate" type="primary">Register</n-button>
      </div>

    </card>
  </form>
</template>
<script>
import { Checkbox } from 'src/components/index';

export default {
  components: {
    Checkbox
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
<style>
</style>
