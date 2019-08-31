<template>
  <div class="card">
    <form>
      <div class="card-header">
        <h4 class="card-title">
          Login Form
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

      </div>
      <div class="card-footer text-center">
        <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Login</button>
      </div>
    </form>

  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'

  export default {
    computed: {
      ...mapFields(['email', 'password'])
    },
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
