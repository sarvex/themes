<template>
  <div>
    <h5 class="text-center">Please give us more details about your platform.</h5>
    <div class="row">
      <div class="col-12">
        <fg-input label="Your website"
                  type="url"
                  name="website"
                  v-validate="modelValidations.website"
                  v-model="model.website"
                  :error="getError('website')"
                  placeholder="ex: http://www.creative-tim.com">
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <fg-input label="Framework Type"
                  name="framework"
                  v-model="model.framework"
                  placeholder="ex: Vue.js">
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input label="Language"
                  :error="getError('language')">
          <el-select name="language"
                     v-validate="modelValidations.language"
                     class="select-default"
                     v-model="model.language">
            <el-option v-for="lang in languageOptions"
                       :key="lang.value"
                       class="select-default"
                       :label="lang.label"
                       :value="lang.value">
            </el-option>
          </el-select>
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <fg-input v-validate="modelValidations.bootstrapVersion"
                  v-model="model.bootstrapVersion"
                  name="bootstrap version"
                  :error="getError('bootstrap version')"
                  label="Bootstrap version">
          <el-select class="select-default"
                     v-model="model.bootstrapVersion">
            <el-option class="select-default" value="1.1">Bootstrap 1.1</el-option>
            <el-option class="select-default" value="2.0">Bootstrap 2.0</el-option>
            <el-option class="select-default" value="3.0">Bootstrap 3.0</el-option>
            <el-option class="select-default" value="4.0">Bootstrap 4.0(alpha)</el-option>
          </el-select>
        </fg-input>
      </div>
      <div class="col-md-6">
        <fg-input label="Price">
          <el-input-number v-model="model.price"
                           placeholder="ex: 19.00"
                           name="price">
          </el-input-number>
        </fg-input>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapFields } from 'vee-validate'
  import { Select, Option } from 'element-ui'

  export default {
    components: {
      [Select.name]: Select,
      [Option.name]: Option
    },
    computed: {
      ...mapFields(['website', 'language', 'bootstrapVersion'])
    },
    data () {
      return {
        languageOptions: [
          {value: '', label: '- language -'},
          {value: 'ms', label: 'Bahasa Melayu'},
          {value: 'ca', label: 'Català'},
          {value: 'da', label: 'Dansk'},
          {value: 'de', label: 'Deutsch'},
          {value: 'en', label: 'English'},
          {value: 'es', label: 'Español'},
          {value: 'el', label: 'Eλληνικά'},
          {value: 'fr', label: 'Français'},
          {value: 'it', label: 'Italiano'},
          {value: 'hu', label: 'Magyar'},
          {value: 'nl', label: 'Nederlands'},
          {value: 'no', label: 'Norsk'},
          {value: 'pl', label: 'Polski'},
          {value: 'pt', label: 'Português'},
          {value: 'fi', label: 'Suomi'},
          {value: 'sv', label: 'Svenska'},
          {value: 'tr', label: 'Türkçe'},
          {value: 'is', label: 'Íslenska'},
          {value: 'cs', label: 'Čeština'},
          {value: 'ru', label: 'Русский'},
          {value: 'th', label: 'ภาษาไทย'},
          {value: 'zh', label: '中文 (简体)'},
          {value: 'zh-TW', label: '中文 (繁體)'},
          {value: 'ja', label: '日本語'},
          {value: 'ko', label: '한국어'}],
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
