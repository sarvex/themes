<template>
    <div class="row">
      <div class="col-lg-5 ml-auto">
        <div class="info-area info-horizontal mt-5">
          <div class="icon icon-primary">
            <i class="now-ui-icons media-2_sound-wave"></i>
          </div>
          <div class="description">
            <h5 class="info-title">Marketing</h5>
            <p class="description">
              We've created the marketing campaign of the website. It was a very interesting collaboration.
            </p>
          </div>
        </div>

        <div class="info-area info-horizontal">
          <div class="icon icon-primary">
            <i class="now-ui-icons media-1_button-pause"></i>
          </div>
          <div class="description">
            <h5 class="info-title">Fully Coded in HTML5</h5>
            <p class="description">
              We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
            </p>
          </div>
        </div>

        <div class="info-area info-horizontal">
          <div class="icon icon-info">
            <i class="now-ui-icons users_single-02"></i>
          </div>
          <div class="description">
            <h5 class="info-title">Built Audience</h5>
            <p class="description">
              There is also a Fully Customizable CMS Admin Dashboard for this product.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mr-auto">
        <form @submit.prevent="register">
        <card class="card-signup text-center" no-footer-line>

          <template slot="header">
            <h4 class="card-title">Register</h4>
            <div class="social">
              <button class="btn btn-icon btn-round btn-twitter">
                <i class="fa fa-twitter"></i>
              </button>
              <button class="btn btn-icon btn-round btn-dribbble">
                <i class="fa fa-dribbble"></i>
              </button>
              <button class="btn btn-icon btn-round btn-facebook">
                <i class="fa fa-facebook"> </i>
              </button>
              <h5 class="card-description"> or be classical </h5>
            </div>
          </template>

          <form @submit.prevent>

            <fg-input v-model="model.firstName"
                      v-validate="'required'"
                      name="first name"
                      :error="getError('first name')"
                      placeholder="First Name..."
                      addon-left-icon="now-ui-icons users_circle-08">
            </fg-input>

            <fg-input v-model="model.lastName"
                      v-validate="'required'"
                      name="last name"
                      :error="getError('last name')"
                      placeholder="Last Name..."
                      addon-left-icon="now-ui-icons text_caps-small">
            </fg-input>

            <fg-input v-model="model.email"
                      v-validate="'required|email'"
                      name="email"
                      :error="getError('email')"
                      placeholder="Email..."
                      addon-left-icon="now-ui-icons ui-1_email-85">
            </fg-input>

            <checkbox class="text-left"
                      v-model="model.agree">
              I agree to the <a href="#something">terms and conditions</a>.
            </checkbox>
          </form>
          <n-button slot="footer"
                    type="primary"
                    native-type="submit"
                    round
                    size="lg">
            Get Started
          </n-button>
        </card>
        </form>
      </div>
    </div>
</template>
<script>
import { Checkbox } from 'src/components';
export default {
  components: {
    Checkbox
  },
  data() {
    return {
      model: {
        email: '',
        firstName: '',
        lastName: '',
        agree: false
      }
    }
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    async register() {
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        // TIP use this.model to send it to api and perform register call
      }
    }
  }
};
</script>
<style>
</style>
