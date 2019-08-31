<template>
  <div>
    <h5 class="text-center">Please give us more details about your platform.</h5>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="form-group">
          <label class="control-label">Your Website</label>
          <input class="form-control"
                 type="text"
                 name="website"
                 v-validate="modelValidations.website"
                 v-model="model.website"
                 url="true"
                 placeholder="ex: http://www.creative-tim.com"
          />
          <small class="text-danger" v-show="website.invalid">
            {{ getError('website') }}
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 col-md-offset-1">
        <div class="form-group">
          <label class="control-label">Framework Type</label>
          <input class="form-control"
                 type="text"
                 name="framework"
                 v-model="model.framework"
                 placeholder="ex: http://www.creative-tim.com"
          />
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label class="control-label">
            Language
          </label>
          <select name="language"
                  v-validate="modelValidations.language"
                  v-model="model.language"
                  class="form-control">
            <option selected="" disabled="">- language -</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="ca">Català</option>
            <option value="da">Dansk</option>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="el">Eλληνικά</option>
            <option value="fr">Français</option>
            <option value="it">Italiano</option>
            <option value="hu">Magyar</option>
            <option value="nl">Nederlands</option>
            <option value="no">Norsk</option>
            <option value="pl">Polski</option>
            <option value="pt">Português</option>
            <option value="fi">Suomi</option>
            <option value="sv">Svenska</option>
            <option value="tr">Türkçe</option>
            <option value="is">Íslenska</option>
            <option value="cs">Čeština</option>
            <option value="ru">Русский</option>
            <option value="th">ภาษาไทย</option>
            <option value="zh">中文 (简体)</option>
            <option value="zh-TW">中文 (繁體)</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
          </select>
          <small class="text-danger" v-show="language.invalid">
            {{ getError('language') }}
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 col-md-offset-1">
        <div class="form-group">
          <label class="control-label">
            Bootstrap Version
          </label>
          <select name="cities"
                  v-validate="modelValidations.bootstrapVersion"
                  v-model="model.bootstrapVersion"
                  class="form-control">
            <option selected="" disabled="">- version -</option>
            <option value="1.1">Bootstrap 1.1</option>
            <option value="2.0">Bootstrap 2.0</option>
            <option value="3.0">Bootstrap 3.0</option>
            <option value="4.0">Bootstrap 4.0(alpha)</option>
          </select>
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <label class="control-label">Price</label>
          <input class="form-control"
                 type="text"
                 name="price"
                 v-model="model.price"
                 placeholder="ex: 19.00"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'

  export default {
    computed: {
      ...mapFields(['website', 'language', 'bootstrapVersion'])
    },
    data () {
      return {
        model: {
          website: '',
          frameworkType: '',
          language: '',
          bootstrapVersion: '',
          price: ''
        },
        modelValidations: {
          website: {
            url: true,
            required: true
          },
          language: {
            required: true
          },
          bootstrapVersion: {
            required: true
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
