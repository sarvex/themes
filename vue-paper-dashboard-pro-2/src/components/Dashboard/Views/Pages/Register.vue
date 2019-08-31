<template>
  <div class="register-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page ">
      <div class="full-page register-page section-image" filter-color="black">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-5 ml-auto">
                <info-section class="mt-5"
                              type="primary"
                              title="Marketing"
                              description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                              icon="nc-icon nc-tv-2">

                </info-section>
                <info-section type="primary"
                              title="Fully Coded in HTML5"
                              description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                              icon="nc-icon nc-html5">

                </info-section>

                <info-section type="primary"
                              title="Built Audience"
                              description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                              icon="nc-icon nc-atom">

                </info-section>
              </div>
              <div class="col-lg-4 col-md-6 mr-auto">
                <card type="signup" class="text-center">
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
                        <i class="fa fa-facebook-f"></i>
                      </button>
                      <p class="card-description"> or be classical </p>
                    </div>
                  </template>

                  <fg-input v-model="form.firstName" addon-left-icon="nc-icon nc-single-02" placeholder="First Name..."></fg-input>
                  <fg-input v-model="form.lastName" addon-left-icon="nc-icon nc-circle-10" placeholder="Last Name..."></fg-input>
                  <fg-input v-model="form.email" addon-left-icon="nc-icon nc-email-85" placeholder="Email..."></fg-input>
                  <p-checkbox class="text-left" v-model="form.acceptTerms">
                    I agree to the
                    <a href="#something">terms and conditions</a>.
                  </p-checkbox>

                  <p-button slot="footer" type="info" round>Get Started</p-button>
                </card>
              </div>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background"
             style="background-image: url(static/img/background/jan-sendereks.jpg) "></div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import { Card, Checkbox, Button, InfoSection } from 'src/components/UIComponents';

  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      InfoSection,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button
    },
    data(){
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          acceptTerms: true
        }
      }
    },
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
