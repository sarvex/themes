<template>
  <auth-layout pageClass="register-page">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <div class="header-text">
          <h2>Vue Light Bootstrap Dashboard PRO</h2>
          <h4>Register for free and experience the dashboard today</h4>
          <hr>
        </div>
      </div>
      <div class="col-md-5 ml-auto">
        <fade-render-transition :duration="200">
          <div class="media">
            <div class="media-left">
              <div class="icon">
                <i class="nc-icon nc-circle-09"></i>
              </div>
            </div>
            <div class="media-body">
              <h4>Free Account</h4>
              <p>Here you can write a feature description for your dashboard, let the users know what is the value that you give them.</p>
            </div>
          </div>
        </fade-render-transition>
        <fade-render-transition :delay="200" :duration="200">
          <div class="media">
            <div class="media-left">
              <div class="icon">
                <i class="nc-icon nc-preferences-circle-rotate"></i>
              </div>
            </div>
            <div class="media-body">
              <h4>Awesome Performances</h4>
              <p>Here you can write a feature description for your dashboard, let the users know what is the value that you give them.</p>
            </div>
          </div>
        </fade-render-transition>
        <fade-render-transition :delay="400" :duration="200">
          <div class="media">
            <div class="media-left">
              <div class="icon">
                <i class="nc-icon nc-planet"></i>
              </div>
            </div>
            <div class="media-body">
              <h4>Global Support</h4>
              <p>Here you can write a feature description for your dashboard, let the users know what is the value that you give them.</p>
            </div>
          </div>
        </fade-render-transition>
      </div>
      <div class="col-md-4 mr-auto">
        <form method="#" action="#">
          <card class="card-plain">
            <div>
              <fg-input placeholder="Your First Name"></fg-input>
              <fg-input placeholder="Your Last Name"></fg-input>
              <fg-input placeholder="Company"></fg-input>
              <fg-input placeholder="Email" type="email"></fg-input>
              <fg-input placeholder="Password" type="password"></fg-input>
              <fg-input placeholder="Password confirmation" type="password"></fg-input>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-fill btn-default btn-neutral btn-wd">Create Free Account</button>
            </div>
          </card>
        </form>
      </div>
    </div>
  </auth-layout>
</template>
<script>
  import { FadeRenderTransition } from 'src/components/index'
  import AuthLayout from './AuthLayout.vue'

  export default {
    components: {
      FadeRenderTransition,
      AuthLayout
    },
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
