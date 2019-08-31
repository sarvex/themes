<template>
  <form class="form-horizontal">
    <card>
      <h4 slot="header" class="card-title">
        Range Validation
      </h4>
      <div>
        <div class="row">
          <label class="col-sm-2 col-form-label">Min Length</label>
          <div class="col-sm-7">
            <fg-input name="minLength"
                      v-validate="modelValidations.minLength"
                      v-model="model.minLength"
                      :error="getError('minLength')">
            </fg-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>min="5"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Max Length</label>
          <div class="col-sm-7">
            <fg-input name="maxLength"
                      v-validate="modelValidations.maxLength"
                      v-model="model.maxLength"
                      :error="getError('maxLength')">
            </fg-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>max="5"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Range</label>
          <div class="col-sm-7">
            <fg-input name="range"
                      v-validate="modelValidations.range"
                      v-model="model.range"
                      :error="getError('range')">
            </fg-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>min_value="6", max_value="10"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Min Value</label>
          <div class="col-sm-7">
            <fg-input name="minValue"
                      v-validate="modelValidations.minValue"
                      v-model="model.minValue"
                      :error="getError('minValue')">
            </fg-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>min_value="6"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Max Value</label>
          <div class="col-sm-7">
            <fg-input name="maxValue"
                      v-validate="modelValidations.maxValue"
                      v-model="model.maxValue"
                      :error="getError('maxValue')">
            </fg-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>max_value="6"</code></label>
        </div>

      </div>
      <div class="text-center">
        <n-button native-type="submit" @click.native.prevent="validate" type="primary">Validate inputs</n-button>
      </div>

    </card>
  </form>
</template>
<script>
export default {
  data() {
    return {
      model: {
        minLength: '',
        maxLength: '',
        range: '',
        minValue: '',
        maxValue: ''
      },
      modelValidations: {
        minLength: {
          min: 5
        },
        maxLength: {
          max: 5
        },
        range: {
          min_value: 6,
          max_value: 10
        },
        minValue: {
          min_value: 6
        },
        maxValue: {
          max_value: 6
        }
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit('on-submit', this.registerForm, isValid);
      });
    }
  }
};
</script>
<style>
</style>
