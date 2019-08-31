<template>
  <div class="card">
    <form>
      <div class="card-header">
        <h4 class="card-title">
          Register Form
        </h4>
      </div>
      <div class="card-content">
        <div class="form-group">
          <label>Email address</label>
          <input type="email"
                 name="email"
                 v-validate="modelValidations.email"
                 v-model="model.email"
                 class="form-control">
          <small class="text-danger" v-show="email.invalid">
            {{ getError('email') }}
          </small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password"
                 name="password"
                 v-validate="modelValidations.password"
                 v-model="model.password"
                 class="form-control">
          <small class="text-danger" v-show="password.invalid">
            {{ getError('password') }}
          </small>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password"
                 name="confirm"
                 v-validate="modelValidations.confirmPassword"
                 v-model="model.confirmPassword"
                 class="form-control">
          <small class="text-danger" v-show="confirm.invalid">
            {{ getError('confirm') }}
          </small>
        </div>
        <p-checkbox>Subscribe to newsletter</p-checkbox>
      </div>
      <div class="card-footer text-right">
        <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Register</button>
      </div>
    </form>

  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'

  export default {
    computed: {
      ...mapFields(['email', 'password', 'confirm'])
    },
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
