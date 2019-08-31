<template>
  <form class="form-horizontal">
    <card>

      <div slot="header">
        <h4 class="card-title">
          Register Form
        </h4>
      </div>
      <div>
        <fg-input name="requiredText"
                  label="Required Text"
                  v-validate="modelValidations.requiredText"
                  v-model="model.requiredText"
                  :error="getError('requiredText')">
          <div slot="infoBlock">
            <code>required:true</code>
          </div>
        </fg-input>

        <fg-input name="email"
                  label="Email"
                  v-validate="modelValidations.email"
                  v-model="model.email"
                  :error="getError('email')">
          <div slot="infoBlock">
            <code>email:true</code>
          </div>
        </fg-input>

        <fg-input name="number"
                  type="number"
                  label="Number"
                  v-validate="modelValidations.number"
                  v-model="model.number"
                  :error="getError('number')">
          <div slot="infoBlock">
            <code>number:true</code>
          </div>
        </fg-input>

        <fg-input name="url"
                  label="Url"
                  v-validate="modelValidations.url"
                  v-model="model.url"
                  :error="getError('url')">
          <div slot="infoBlock">
            <code>url:true</code>
          </div>
        </fg-input>

        <fg-input name="idSource"
                  label="Equal To"
                  placeholder="idSource"
                  v-validate="modelValidations.idSource"
                  v-model="model.idSource"
                  :error="getError('idSource')">
        </fg-input>

        <fg-input name="idDestination"
                  label="Equal To"
                  placeholder="#idDestination"
                  v-validate="modelValidations.idDestination"
                  v-model="model.idDestination"
                  :error="getError('idDestination')">
          <div slot="infoBlock">
            <code>confirmed: 'idSource'</code>
          </div>
        </fg-input>

      </div>
      <div class="text-center">
        <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Validate inputs</button>
      </div>

    </card>
  </form>
</template>
<script>
  export default {
    data () {
      return {
        model: {
          requiredText: '',
          email: '',
          number: '',
          url: '',
          idSource: '',
          idDestination: ''
        },
        modelValidations: {
          requiredText: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          number: {
            required: true,
            decimal: true
          },
          url: {
            required: true,
            url: true
          },
          idSource: {
            required: true
          },
          idDestination: {
            required: true,
            confirmed: 'idSource'
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
