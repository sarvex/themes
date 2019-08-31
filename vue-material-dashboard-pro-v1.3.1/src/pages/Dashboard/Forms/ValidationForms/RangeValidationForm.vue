<template>
  <form>
    <md-card>
      <md-card-header class="md-card-header-text md-card-header-green">
        <div class="card-text">
          <h4 class="title">Range Validation</h4>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Min Length
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-valid': !errors.has('minLength') && touched.minLength },
                { 'md-error': errors.has('minLength') }
              ]"
            >
              <md-input
                v-model="minLength"
                data-vv-name="minLength"
                type="text"
                required
                v-validate="modelValidations.minLength"
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('minLength')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('minLength') && touched.minLength"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>minLength="5"</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Max Length
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-valid': !errors.has('maxLength') && touched.maxLength },
                { 'md-error': errors.has('maxLength') }
              ]"
            >
              <md-input
                v-model="maxLength"
                data-vv-name="maxLength"
                type="text"
                required
                v-validate="modelValidations.maxLength"
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('maxLength')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('maxLength') && touched.maxLength"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>maxLength="5"</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Range
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-valid': !errors.has('range') && touched.range },
                { 'md-error': errors.has('range') }
              ]"
            >
              <md-input
                v-model="range"
                data-vv-name="range"
                type="text"
                required
                v-validate="modelValidations.range"
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('range')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('range') && touched.range"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>range="[6,10]"</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Min Value
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-valid': !errors.has('minValue') && touched.minValue },
                { 'md-error': errors.has('minValue') }
              ]"
            >
              <md-input
                v-model="minValue"
                data-vv-name="minValue"
                type="text"
                required
                v-validate="modelValidations.minValue"
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('minValue')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('minValue') && touched.minValue"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>min="6"</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Max Value
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-valid': !errors.has('maxValue') && touched.maxValue },
                { 'md-error': errors.has('maxValue') }
              ]"
            >
              <md-input
                v-model="maxValue"
                data-vv-name="maxValue"
                type="text"
                required
                v-validate="modelValidations.maxValue"
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('maxValue')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('maxValue') && touched.maxValue"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>max="6"</code>
          </label>
        </div>
      </md-card-content>

      <md-card-actions class="text-center">
        <md-button
          native-type="submit"
          @click.native.prevent="validate"
          class="md-success"
          >Validate Inputs</md-button
        >
      </md-card-actions>
    </md-card>
  </form>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      minLength: "",
      maxLength: "",
      range: "",
      minValue: "",
      maxValue: "",
      touched: {
        minLength: false,
        maxLength: false,
        range: false,
        minValue: false,
        maxValue: false
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
          min: 6,
          max: 10
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
    validate() {
      this.$validator.validateAll().then(isValid => {
        this.$emit("on-submit", this.registerForm, isValid);
      });
    }
  },
  watch: {
    minLength() {
      this.touched.minLength = true;
    },
    maxLength() {
      this.touched.maxLength = true;
    },
    range() {
      this.touched.range = true;
    },
    minValue() {
      this.touched.minValue = true;
    },
    maxValue() {
      this.touched.maxValue = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}

.text-center {
  justify-content: center !important;
}
</style>
