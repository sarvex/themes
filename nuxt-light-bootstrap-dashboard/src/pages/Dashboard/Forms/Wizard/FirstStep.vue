<template>
  <div>
    <h5 class="text-center">Please tell us more about yourself.</h5>
    <div class="row">
      <div class="col-md-6">
        <fg-input label="First Name"
                  name="first name"
                  v-validate="modelValidations.firstName"
                  v-model="model.firstName"
                  :error="getError('first name')"
                  placeholder="ex: Mike">
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input label="Last Nmae"
                  name="last name"
                  v-validate="modelValidations.lastName"
                  v-model="model.lastName"
                  :error="getError('last name')"
                  placeholder="ex: Andrew">
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <fg-input label="Email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  v-validate="modelValidations.email"
                  :error="getError('email')"
                  v-model="model.email">
        </fg-input>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
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
        return this.$validator.validateAll().then(res => {
          this.$emit('on-validated', res, this.model)
          return res
        })
      }
    }
  }
</script>
<style>
</style>
