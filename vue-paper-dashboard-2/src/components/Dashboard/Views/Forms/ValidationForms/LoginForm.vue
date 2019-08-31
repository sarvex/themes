<template>
  <div class="card">
    <form>
      <div class="card-header">
        <h4 class="card-title">
          Login Form
        </h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <fg-input  type="email"
                     label="Email address"
                     required
                     name="email"
                     v-validate="modelValidations.email"
                     :error="getError('email')"
                     v-model="model.email">
          </fg-input>
        </div>
        <div class="form-group">
          <fg-input  type="password"
                     name="password"
                     label="Password"
                     required
                     v-validate="modelValidations.password"
                     :error="getError('email')"
                     v-model="model.password">
          </fg-input>
        </div>

      </div>
      <div class="card-footer text-center">
        <p-button type="info" @click.prevent="validate">Login</p-button>
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
          password: ''
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
