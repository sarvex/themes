<template>
  <form class="form-horizontal">
    <card>
      <h4 slot="header" class="card-title">Type Validation</h4>
      <div>
        <div class="row">
          <label class="col-sm-2 col-form-label">Requred Text</label>
          <div class="col-sm-7">
            <base-input
              name="required"
              v-validate="modelValidations.required"
              v-model="model.required"
              :error="getError('required')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"
            ><code>required="true"</code></label
          >
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-7">
            <base-input
              name="email"
              v-validate="modelValidations.email"
              v-model="model.email"
              :error="getError('email')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"
            ><code>email="true"</code></label
          >
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Number</label>
          <div class="col-sm-7">
            <base-input
              name="number"
              v-validate="modelValidations.number"
              v-model="model.number"
              :error="getError('number')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"
            ><code>numeric="true"</code></label
          >
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Url</label>
          <div class="col-sm-7">
            <base-input
              name="url"
              v-validate="modelValidations.url"
              v-model="model.url"
              :error="getError('url')"
            >
            </base-input>
          </div>
          <label class="col-sm-3 label-on-right"><code>url="true"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Url</label>
          <div class="col-sm-3">
            <base-input
              name="equalToSource"
              placeholder="Source field"
              v-validate="modelValidations.equalToSource"
              v-model="model.equalToSource"
              :error="getError('equalToSource')"
            >
            </base-input>
          </div>
          <div class="col-sm-3">
            <base-input
              name="equalToDest"
              placeholder="Destination field"
              v-validate="modelValidations.equalToDest"
              v-model="model.equalToDest"
              :error="getError('equalToDest')"
            >
            </base-input>
          </div>

          <label class="col-sm-4 label-on-right"
            ><code>confirmed="equalToSource"</code></label
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
        required: '',
        email: '',
        number: '',
        equalToSourceurl: '',
        equalToSource: '',
        equalToDest: ''
      },
      modelValidations: {
        required: {
          required: true
        },
        email: {
          email: true
        },
        number: {
          numeric: true
        },
        url: {
          url: true
        },
        equalToSource: {
          required: true
        },
        equalToDest: {
          required: true,
          confirmed: 'equalToSource'
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
<style></style>
