<template>
  <div class="col-md-4 ml-auto mr-auto">
    <form @submit.prevent="login">
      <card class="card-login card-plain">

        <div slot="header">
          <div class="logo-container">
            <img src="img/now-logo.png" alt="">
          </div>
        </div>

        <div>
          <fg-input v-model="model.email"
                    v-validate="'required|email'"
                    name="email"
                    :error="getError('email')"
                    class="no-border form-control-lg"
                    placeholder="Email"
                    addon-left-icon="now-ui-icons ui-1_email-85">
          </fg-input>

          <fg-input v-model="model.password"
                    v-validate="'required|min:5'"
                    type="password"
                    name="password"
                    :error="getError('password')"
                    class="no-border form-control-lg"
                    placeholder="Password"
                    addon-left-icon="now-ui-icons ui-1_lock-circle-open">
          </fg-input>
        </div>

        <div slot="footer">
          <n-button native-type="submit" type="primary" round block>
            Get Started
          </n-button>
          <div class="pull-left">
            <h6>
              <router-link class="link footer-link" to="/register">
                Create Account
              </router-link>
            </h6>
          </div>

          <div class="pull-right">
            <h6><a href="#pablo" class="link footer-link">Need Help?</a></h6>
          </div>
        </div>
      </card>
    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      model: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    async login() {
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        // TIP use this.model to send it to api and perform login call
      }
    }
  }
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>
