<template>
  <div class="card">
    <form class="form-horizontal">
      <div class="card-header">
        <h4 class="card-title">
          Register Form
        </h4>
      </div>
      <div class="card-content">
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Required text</label>
            <div class="col-sm-6">
              <input type="text"
                     name="requiredText"
                     v-validate="modelValidations.requiredText"
                     v-model="model.requiredText"
                     class="form-control">
              <small class="text-danger" v-show="requiredText.invalid">
                {{ getError('requiredText') }}
              </small>
            </div>
            <div class="col-sm-4">
              <code>required:true</code>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Email</label>
            <div class="col-sm-6">
              <input type="email"
                     name="email"
                     v-validate="modelValidations.email"
                     v-model="model.email"
                     class="form-control">
              <small class="text-danger" v-show="email.invalid">
                {{ getError('email') }}
              </small>
            </div>
            <div class="col-sm-4">
              <code>email:true</code>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Number</label>
            <div class="col-sm-6">
              <input type="number"
                     name="number"
                     v-validate="modelValidations.number"
                     v-model="model.number"
                     class="form-control">
              <small class="text-danger" v-show="number.invalid">
                {{ getError('number') }}
              </small>
            </div>
            <div class="col-sm-4">
              <code>decimal:true</code>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Url</label>
            <div class="col-sm-6">
              <input type="url"
                     name="url"
                     v-validate="modelValidations.url"
                     v-model="model.url"
                     class="form-control">
              <small class="text-danger" v-show="url.invalid">
                {{ getError('url') }}
              </small>
            </div>
            <div class="col-sm-4">
              <code>url:true</code>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group column-sizing">
            <label class="col-sm-2 control-label">
              Equal to
            </label>
            <div class="col-sm-3">
              <input class="form-control"
                     name="idSource"
                     placeholder="#idSource"
                     v-validate="modelValidations.idSource"
                     v-model="model.idSource"
                     type="text">
              <small class="text-danger" v-show="idSource.invalid">
                {{ getError('idSource') }}
              </small>

            </div>
            <div class="col-sm-3">
              <input class="form-control"
                     name="idDestination"
                     placeholder="#idDestination"
                     v-validate="modelValidations.idDestination"
                     v-model="model.idDestination"
                     type="text">
              <small class="text-danger" v-show="idDestination.invalid">
                {{ getError('idDestination') }}
              </small>
            </div>
            <div class="col-sm-4">
              <code>confirmed : 'idSource'</code>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="card-footer text-center">
        <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Validate inputs</button>
      </div>
    </form>

  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'

  export default {
    computed: {
      ...mapFields(['requiredText', 'email', 'number', 'url', 'idSource', 'idDestination'])
    },
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
