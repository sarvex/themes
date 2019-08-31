<template>
  <form>
    <card>
      <div slot="header">
        <h4 class="card-title">
          Register Form
        </h4>
      </div>
      <div>
        <fg-input type="email"
                  name="email"
                  label="Email address"
                  v-validate="modelValidations.email"
                  :error="getError('email')"
                  v-model="model.email">
        </fg-input>

        <fg-input label="Password"
                  type="password"
                  name="password"
                  v-validate="modelValidations.password"
                  :error="getError('password')"
                  v-model="model.password">
        </fg-input>

        <fg-input label="Confirm Password"
                  type="password"
                  name="confirm"
                  v-validate="modelValidations.confirmPassword"
                  :error="getError('confirm')"
                  v-model="model.confirmPassword">
        </fg-input>
        <fg-input>
          <checkbox v-model="model.subscribe"
                    name="subscribe">Subscribe to newsletter
          </checkbox>
        </fg-input>
      </div>
      <div class="card-footer text-right">
        <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Register</button>
      </div>

    </card>
  </form>
</template>
<script>
  import {Checkbox} from 'src/components/index'
  export default {
    components: {
      Checkbox
    },
    data () {
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
