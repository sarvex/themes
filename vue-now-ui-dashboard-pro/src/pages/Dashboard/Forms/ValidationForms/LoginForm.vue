<template>
  <form>
    <card>
      <div slot="header">
        <h4 class="card-title">
          Login Form
        </h4>
      </div>
      <div>
        <fg-input label="Full Name"
                  required
                  v-model="model.fullName"
                  v-validate="modelValidations.fullName"
                  :error="getError('full name')"
                  name="full name">
        </fg-input>

        <fg-input label="Email address"
                  required
                  v-model="model.email"
                  v-validate="modelValidations.email"
                  :error="getError('email')"
                  name="email"
                  type="email">
        </fg-input>

        <fg-input label="Passowrd"
                  required
                  name="password"
                  v-model="model.password"
                  v-validate="modelValidations.password"
                  :error="getError('password')"
                  type="password">
        </fg-input>
      </div>
      <div class="d-flex justify-content-center">
        <n-button native-type="submit" @click.native.prevent="validate" type="primary">Login</n-button>
      </div>
    </card>
  </form>
</template>
<script>
export default {
  data() {
    return {
      model: {
        email: '',
        password: '',
        fullName: ''
      },
      modelValidations: {
        fullName: {
          required: true
        },
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
