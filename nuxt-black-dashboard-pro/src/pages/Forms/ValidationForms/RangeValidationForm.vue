<template>
  <form class="form-horizontal">
    <card>
      <h4 slot="header" class="card-title">Range Validation</h4>
      <div>
        <div class="row">
          <label class="col-sm-2 col-form-label">Min Length</label>
          <div class="col-sm-7">
            <base-input
              name="minLength"
              v-validate="modelValidations.minLength"
              v-model="model.minLength"
              :error="getError('minLength')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>min="5"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Max Length</label>
          <div class="col-sm-7">
            <base-input
              name="maxLength"
              v-validate="modelValidations.maxLength"
              v-model="model.maxLength"
              :error="getError('maxLength')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>max="5"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Range</label>
          <div class="col-sm-7">
            <base-input
              name="range"
              v-validate="modelValidations.range"
              v-model="model.range"
              :error="getError('range')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"
            ><code>min_value="6", max_value="10"</code></label
          >
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Min Value</label>
          <div class="col-sm-7">
            <base-input
              name="minValue"
              v-validate="modelValidations.minValue"
              v-model="model.minValue"
              :error="getError('minValue')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"
            ><code>min_value="6"</code></label
          >
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Max Value</label>
          <div class="col-sm-7">
            <base-input
              name="maxValue"
              v-validate="modelValidations.maxValue"
              v-model="model.maxValue"
              :error="getError('maxValue')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"
            ><code>max_value="6"</code></label
          >
        </div>
      </div>
      <div class="text-center">
        <base-button
          native-type="submit"
          @click.native.prevent="validate"
          type="primary"
          >Validate inputs</base-button
        >
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
          required: true,
          min: 5
        },
        maxLength: {
          required: true,
          max: 5
        },
        range: {
          required: true,
          min_value: 6,
          max_value: 10
        },
        minValue: {
          required: true,
          min_value: 6
        },
        maxValue: {
          required: true,
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
        this.$emit('on-submit', this.model, isValid);
      });
    }
  }
};
</script>
<style></style>
