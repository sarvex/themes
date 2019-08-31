<template>
  <div class="card">
    <form>
      <div class="card-header">
        <h4 class="card-title">
          Register Form
        </h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label>Email address</label>
          <fg-input  type="email"
                     name="email"
                     v-validate="modelValidations.email"
                     :error="getError('email')"
                     v-model="model.email">
          </fg-input>
        </div>
        <div class="form-group">
          <label>Password</label>
          <fg-input  type="password"
                     name="password"
                     v-validate="modelValidations.password"
                     v-model="model.password"
                     :error="getError('password')">
          </fg-input>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <fg-input  type="password"
                     name="confirm"
                     v-validate="modelValidations.confirmPassword"
                     v-model="model.confirmPassword"
                     :error="getError('confirm')">
          </fg-input>
        </div>
      </div>
      <div class="card-footer text-right">
        <p-checkbox class="pull-left">Subscribe to newsletter</p-checkbox>
        <p-button type="info" @click.prevent="validate">Register</p-button>
      </div>
    </form>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        model: {
          email: '',
          password: '',
          confirmPassword: ''
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
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
        })
      }
    }
  }
</script>
<style>
</style>
