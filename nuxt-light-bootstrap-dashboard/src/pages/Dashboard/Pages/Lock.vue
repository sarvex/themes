<template>
  <auth-layout pageClass="lock-page">
    <div class="content">
      <form method="#" action="#">
        <div class="user-profile">
          <div class="author">
            <img class="avatar" src="static/img/default-avatar.png" alt="...">
          </div>
          <h4>Tania Andrew</h4>
          <fg-input type="password" placeholder="Enter Password"></fg-input>
          <button type="button" class="btn btn-round btn-info btn-wd">Unlock</button>
        </div>
      </form>
    </div>
  </auth-layout>
</template>
<script>
  import AuthLayout from './AuthLayout.vue'
  export default {
    components: {
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
