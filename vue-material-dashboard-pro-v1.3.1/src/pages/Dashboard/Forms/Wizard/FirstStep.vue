<template>
  <div>
    <h5 class="info-text">
      Let's start with the basic information (with validation)
    </h5>
    <div class="md-layout">
      <div class="md-layout-item md-size-40 md-small-size-100">
        <div class="picture-container">
          <div class="picture">
            <div v-if="!image">
              <img :src="avatar" class="picture-src" title="" />
            </div>
            <div v-else>
              <img :src="image" />
            </div>
            <input type="file" @change="onFileChange" />
          </div>
          <h6 class="description">Choose Picture</h6>
        </div>
      </div>
      <div class="md-layout-item md-size-60 mt-4 md-small-size-100">
        <md-field
          :class="[
            { 'md-valid': !errors.has('firstName') && touched.firstName },
            { 'md-form-group': true },
            { 'md-error': errors.has('firstName') }
          ]"
        >
          <md-icon>face</md-icon>
          <label>First Name</label>
          <md-input
            v-model="firstName"
            data-vv-name="firstName"
            type="text"
            name="firstName"
            required
            v-validate="modelValidations.firstName"
          >
          </md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('firstName')"
              >close</md-icon
            >
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon
              class="success"
              v-show="!errors.has('firstName') && touched.firstName"
              >done</md-icon
            >
          </slide-y-down-transition>
        </md-field>

        <md-field
          :class="[
            { 'md-valid': !errors.has('lastName') && touched.lastName },
            { 'md-form-group': true },
            { 'md-error': errors.has('lastName') }
          ]"
        >
          <md-icon>record_voice_over</md-icon>
          <label>Last Name</label>
          <md-input
            v-model="lastName"
            data-vv-name="lastName"
            type="text"
            name="lastName"
            required
            v-validate="modelValidations.lastName"
          >
          </md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('lastName')"
              >close</md-icon
            >
          </slide-y-down-transition>
          <slide-y-down-transition>
            <md-icon
              class="success"
              v-show="!errors.has('lastName') && touched.lastName"
              >done</md-icon
            >
          </slide-y-down-transition>
        </md-field>
      </div>

      <div class="md-layout-item md-size-95 ml-auto mt-4 md-small-size-100">
        <md-field
          :class="[
            { 'md-valid': !errors.has('email') && touched.email },
            { 'md-form-group': true },
            { 'md-error': errors.has('email') }
          ]"
        >
          <md-icon>email</md-icon>
          <label>Email</label>
          <md-input
            v-model="email"
            data-vv-name="email"
            type="text"
            name="email"
            required
            v-validate="modelValidations.email"
          >
          </md-input>
          <slide-y-down-transition>
            <md-icon class="error" v-show="errors.has('email')">close</md-icon>
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
    </div>
  </div>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    SlideYDownTransition
  },
  props: {
    avatar: {
      type: String,
      default: "./img/default-avatar.png"
    }
  },
  data() {
    return {
      image: "",
      single: null,
      firstName: "",
      lastName: "",
      email: "",
      touched: {
        firstName: false,
        lastName: false
      },
      modelValidations: {
        firstName: {
          required: true,
          min: 5
        },
        lastName: {
          required: true,
          min: 5
        },
        email: {
          required: true,
          email: true
        }
      }
    };
  },
  methods: {
    handlePreview(file) {
      this.model.imageUrl = URL.createObjectURL(file.raw);
    },
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    validate() {
      return this.$validator.validateAll().then(res => {
        this.$emit("on-validated", res);
        return res;
      });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  },
  watch: {
    firstName() {
      this.touched.firstName = true;
    },
    lastName() {
      this.touched.lastName = true;
    },
    email() {
      this.touched.email = true;
    }
  }
};
</script>
<style></style>
