<template>
  <div>
    <h5 class="text-center">Please tell us more about yourself.</h5>
    <div class="row">
      <div class="col-md-5 col-md-offset-1">
        <div class="form-group">
          <label class="control-label">
            First Name
          </label>
          <input class="form-control"
                 type="text"
                 name="firstName"
                 v-validate="modelValidations.firstName"
                 v-model="model.firstName"
                 placeholder="ex: Mike"
          />
          <small class="text-danger" v-show="firstName.invalid">
            {{ getError('firstName') }}
          </small>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label class="control-label">
            Last Name
          </label>
          <input class="form-control"
                 type="text"
                 name="lastName"
                 v-validate="modelValidations.lastName"
                 v-model="model.lastName"
                 placeholder="ex: Andrew"
          />
          <small class="text-danger" v-show="lastName.invalid">
            {{ getError('lastName') }}
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="form-group">
          <label class="control-label">
            Email
          </label>
          <input type="email"
                 name="email"
                 v-validate="modelValidations.email"
                 v-model="model.email"
                 class="form-control">
          <small class="text-danger" v-show="email.invalid">
            {{ getError('email') }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'

  export default {
    computed: {
      ...mapFields(['firstName', 'lastName', 'email'])
    },
    data () {
      return {
        model: {
          firstName: '',
          lastName: '',
          email: ''
        },
        modelValidations: {
          firstName: {
            min: 5
          },
          lastName: {
            min: 5
          },
          email: {
            required: true,
            email: true
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        return this.$validator.validateAll()
      }
    }
  }
</script>
<style>
</style>
