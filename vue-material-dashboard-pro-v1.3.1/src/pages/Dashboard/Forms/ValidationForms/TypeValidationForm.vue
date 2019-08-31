<template>
  <form>
    <md-card>
      <md-card-header class="md-card-header-text md-card-header-green">
        <div class="card-text">
          <h4 class="title">Type Validation</h4>
        </div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Required Text
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-error': errors.has('required') },
                { 'md-valid': !errors.has('required') && touched.required }
              ]"
            >
              <md-input
                v-model="required"
                data-vv-name="required"
                type="text"
                v-validate="modelValidations.required"
                required
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('required')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('required') && touched.required"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>required</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Email
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-error': errors.has('email') },
                { 'md-valid': !errors.has('email') && touched.email }
              ]"
            >
              <md-input
                v-model="email"
                data-vv-name="email"
                type="text"
                v-validate="modelValidations.email"
                required
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('email')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('email') && touched.email"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>email="true"</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Number
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-error': errors.has('number') },
                { 'md-valid': !errors.has('number') && touched.number }
              ]"
            >
              <md-input
                v-model="number"
                data-vv-name="number"
                type="number"
                v-validate="modelValidations.number"
                required
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="error" v-show="errors.has('number')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('number') && touched.number"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>number="true"</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Url
          </label>
          <div class="md-layout-item">
            <md-field
              :class="[
                { 'md-error': errors.has('url') },
                { 'md-valid': !errors.has('url') && touched.url }
              ]"
            >
              <md-input
                v-model="url"
                data-vv-name="url"
                type="url"
                v-validate="modelValidations.url"
                required
              >
              </md-input>
              <slide-y-down-transition>
                <md-icon class="errror" v-show="errors.has('url')"
                  >close</md-icon
                >
              </slide-y-down-transition>
              <slide-y-down-transition>
                <md-icon
                  class="success"
                  v-show="!errors.has('url') && touched.url"
                  >done</md-icon
                >
              </slide-y-down-transition>
            </md-field>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>url="true"</code>
          </label>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-20 md-form-label">
            Equal to
          </label>
          <div class="md-layout-item">
            <div class="md-layout">
              <div class="md-layout-item">
                <md-field
                  :class="[
                    { 'md-error': errors.has('equalToSource') },
                    {
                      'md-valid':
                        !errors.has('equalToSource') && touched.equalToSource
                    }
                  ]"
                >
                  <label>#idSource</label>
                  <md-input
                    v-model="equalToSource"
                    data-vv-name="equalToSource"
                    ref="equalToSource"
                    type="text"
                    v-validate="modelValidations.equalToSource"
                    required
                  >
                  </md-input>
                  <slide-y-down-transition>
                    <md-icon class="error" v-show="errors.has('equalToSource')"
                      >close</md-icon
                    >
                  </slide-y-down-transition>
                  <slide-y-down-transition>
                    <md-icon
                      class="success"
                      v-show="
                        !errors.has('equalToSource') && touched.equalToSource
                      "
                      >done</md-icon
                    >
                  </slide-y-down-transition>
                </md-field>
              </div>
              <div class="md-layout-item">
                <md-field
                  :class="[
                    { 'md-error': errors.has('equalToDest') },
                    {
                      'md-valid':
                        !errors.has('equalToDest') && touched.equalToDest
                    }
                  ]"
                >
                  <label>#idDestination</label>
                  <md-input
                    v-model="equalToDest"
                    data-vv-name="equalToDest"
                    data-vv-as="equalToSource"
                    type="text"
                    v-validate="modelValidations.equalToDest"
                    required
                  >
                  </md-input>
                  <slide-y-down-transition>
                    <md-icon class="error" v-show="errors.has('equalToDest')"
                      >close</md-icon
                    >
                  </slide-y-down-transition>
                  <slide-y-down-transition>
                    <md-icon
                      class="success"
                      v-show="!errors.has('equalToDest') && touched.equalToDest"
                      >done</md-icon
                    >
                  </slide-y-down-transition>
                </md-field>
              </div>
            </div>
          </div>
          <label class="md-layout-item md-size-20 md-label-on-right">
            <code>equalTo="#idSource"</code>
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
      equalToSource: "",
      equalToDest: "",
      required: "",
      email: "",
      number: "",
      url: "",
      touched: {
        required: false,
        email: false,
        number: false,
        url: false,
        equalToSource: false,
        equalToDest: false
      },
      modelValidations: {
        required: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        number: {
          required: true,
          numeric: true
        },
        url: {
          required: true,
          url: true
        },
        equalToSource: {
          required: true
        },
        equalToDest: {
          required: true,
          confirmed: "equalToSource"
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
    required() {
      this.touched.required = true;
    },
    email() {
      this.touched.email = true;
    },
    number() {
      this.touched.number = true;
    },
    url() {
      this.touched.url = true;
    },
    equalToSource() {
      this.touched.equalToSource = true;
    },
    equalToDest() {
      this.touched.equalToDest = true;
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
