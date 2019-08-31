<template>
  <div class="row justify-content-center">
    <div class="col-sm-12">
      <h5 class="info-text">Are you living in a nice area?</h5>
    </div>
    <div class="col-sm-7">
      <base-input
        label="Street Name"
        name="street name"
        v-model="model.street"
        :error="getError('street name')"
        v-validate="modelValidations.street"
      >
      </base-input>
    </div>
    <div class="col-sm-3">
      <base-input
        label="Street No"
        name="street number"
        v-model="model.streetNo"
        :error="getError('street number')"
        v-validate="modelValidations.streetNo"
      >
      </base-input>
    </div>
    <div class="col-sm-5">
      <base-input
        label="City"
        name="city"
        v-model="model.city"
        :error="getError('city')"
        v-validate="modelValidations.city"
      >
      </base-input>
    </div>
    <div class="col-sm-5">
      <label>Country</label>
      <base-input :error="getError('country')">
        <el-select
          v-model="model.country"
          class="select-primary"
          name="country"
          v-validate="modelValidations.country"
        >
          <el-option
            v-for="country in countryOptions"
            class="select-primary"
            :label="country"
            :value="country"
            :key="country"
          ></el-option>
        </el-select>
      </base-input>
    </div>
  </div>
</template>
<script>
import { Select, Option } from 'element-ui';

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      model: {
        street: '',
        streetNo: '',
        city: '',
        country: ''
      },
      countryOptions: [
        'Australia',
        'Germany',
        'Netherlands',
        'USA',
        'UK',
        'New Zealand'
      ],
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
        this.$emit('on-validated', res, this.model);
        return res;
      });
    }
  }
};
</script>
<style></style>
