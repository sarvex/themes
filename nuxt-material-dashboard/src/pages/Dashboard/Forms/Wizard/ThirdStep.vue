<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <h5 class="info-text">Are you living in a nice area?</h5>
    </div>
    <div class="md-layout-item md-size-70 md-small-size-100">
      <md-field
        :class="[
          { 'md-valid': !errors.has('street name') && touched.street },
          { 'md-error': errors.has('street name') }
        ]"
      >
        <label>Street Name</label>
        <md-input
          v-model="street"
          data-vv-name="street name"
          type="text"
          name="street name"
          required
          v-validate="modelValidations.street"
        >
        </md-input>
        <slide-y-down-transition>
          <md-icon class="error" v-show="errors.has('street name')"
            >close</md-icon
          >
        </slide-y-down-transition>
        <slide-y-down-transition>
          <md-icon
            class="success"
            v-show="!errors.has('street name') && touched.street"
            >done</md-icon
          >
        </slide-y-down-transition>
      </md-field>
    </div>
    <div class="md-layout-item md-size-30 md-small-size-100">
      <md-field
        :class="[
          { 'md-valid': !errors.has('street number') && touched.streetNo },
          { 'md-error': errors.has('street number') }
        ]"
      >
        <label>Street Number</label>
        <md-input
          v-model="streetNo"
          data-vv-name="street number"
          type="text"
          name="street number"
          required
          v-validate="modelValidations.streetNo"
        >
        </md-input>
        <slide-y-down-transition>
          <md-icon class="error" v-show="errors.has('street name')"
            >close</md-icon
          >
        </slide-y-down-transition>
        <slide-y-down-transition>
          <md-icon
            class="success"
            v-show="!errors.has('street number') && touched.streetNo"
            >done</md-icon
          >
        </slide-y-down-transition>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100">
      <md-field
        :class="[
          { 'md-valid': !errors.has('city') && touched.city },
          { 'md-error': errors.has('city') }
        ]"
      >
        <label>City</label>
        <md-input
          v-model="city"
          data-vv-name="city"
          type="text"
          name="city"
          required
          v-validate="modelValidations.city"
        >
        </md-input>
        <slide-y-down-transition>
          <md-icon class="error" v-show="errors.has('city')">close</md-icon>
        </slide-y-down-transition>
        <slide-y-down-transition>
          <md-icon class="success" v-show="!errors.has('city') && touched.city"
            >done</md-icon
          >
        </slide-y-down-transition>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="select">Single Select</label>
        <md-select v-model="select" name="select">
          <md-option value="angola">Angola</md-option>
          <md-option value="france">France</md-option>
          <md-option value="germany">Germany</md-option>
          <md-option value="england">England</md-option>
        </md-select>
      </md-field>
    </div>
  </div>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      street: "",
      streetNo: "",
      city: "",
      country: "",
      select: null,
      touched: {
        street: false
      },
      countryOptions: ["One", "Two", "Three", "Four", "Five", "Six"],
      modelValidations: {
        street: {
          required: true,
          min: 5
        },
        streetNo: {
          required: true,
          min: 5
        },
        city: {
          required: true
        },
        country: {
          required: true
        }
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    validate() {
      return this.$validator.validateAll().then(res => {
        this.$emit("on-validated", res);
        return res;
      });
    }
  },
  watch: {
    street() {
      this.touched.street = true;
    },
    streetNo() {
      this.touched.streetNo = true;
    }
  }
};
</script>
<style></style>
