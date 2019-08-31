<template>
  <form>
    <card>
      <div slot="header">
        <h4 class="card-title">
          Login Form
        </h4>
      </div>
      <div>
        <fg-input label="Email address"
                  v-model="model.email"
                  v-validate="modelValidations.email"
                  :error="getError('email')"
                  name="email"
                  type="email">
        </fg-input>

        <fg-input label="Passowrd"
                  name="password"
                  v-model="model.password"
                  v-validate="modelValidations.password"
                  :error="getError('password')"
                  type="password">
        </fg-input>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Login</button>
      </div>
    </card>
  </form>
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
