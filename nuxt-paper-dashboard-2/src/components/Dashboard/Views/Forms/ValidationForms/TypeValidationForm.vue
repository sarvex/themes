<template>
  <card class="form-horizontal">
    <h4 slot="header" class="card-title">
      Type Validation
    </h4>

    <div class="row">
      <label class="col-sm-2 col-form-label">Required Text</label>
      <div class="col-sm-7">
        <fg-input type="text"
                  name="requiredText"
                  v-validate="modelValidations.requiredText"
                  :error="getError('requiredText')"
                  v-model="model.requiredText">
        </fg-input>
      </div>
      <div class="col-sm-3 label-on-right">
        <code>required:true</code>
      </div>
    </div>

    <div class="row">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-7">
        <fg-input type="text"
                  name="email"
                  v-validate="modelValidations.email"
                  :error="getError('email')"
                  v-model="model.email">
        </fg-input>
      </div>
      <div class="col-sm-3 label-on-right">
        <code>email:true</code>
      </div>
    </div>

    <div class="row">
      <label class="col-sm-2 col-form-label">Number</label>
      <div class="col-sm-7">
        <fg-input type="text"
                  name="number"
                  v-validate="modelValidations.number"
                  :error="getError('number')"
                  v-model="model.number">
        </fg-input>
      </div>
      <div class="col-sm-3 label-on-right">
        <code>number:true</code>
      </div>
    </div>


    <div class="row">
      <label class="col-sm-2 col-form-label">Url</label>
      <div class="col-sm-7">
        <fg-input type="text"
                  name="url"
                  v-validate="modelValidations.url"
                  :error="getError('url')"
                  v-model="model.url">
        </fg-input>
      </div>
      <div class="col-sm-3 label-on-right">
        <code>url:true</code>
      </div>
    </div>

    <div class="row">
      <label class="col-sm-2 col-form-label">Equal to</label>
      <div class="col-sm-3">
        <fg-input type="text"
                  name="idSource"
                  placeholder="#idSource"
                  v-validate="modelValidations.idSource"
                  :error="getError('idSource')"
                  v-model="model.idSource">
        </fg-input>
      </div>
      <div class="col-sm-3">
        <fg-input type="text"
                  name="idDestination"
                  placeholder="#idDestination"
                  v-validate="modelValidations.idDestination"
                  :error="getError('idDestination')"
                  v-model="model.idDestination">
        </fg-input>
      </div>
      <div class="col-sm-3 label-on-right">
        <code>confirmed: 'idSource'</code>
      </div>
    </div>

    <div slot="footer" class="text-center">
      <p-button type="info" @click.prevent="validate">Validate inputs</p-button>
    </div>

  </card>
</template>
<script>
  import { Card } from 'src/components/UIComponents'

  export default {
    components: {
      Card
    },
    data() {
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
      getError(fieldName) {
        return this.errors.first(fieldName)
      },
      validate() {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
        })
      }
    }
  }
</script>
<style>
</style>
