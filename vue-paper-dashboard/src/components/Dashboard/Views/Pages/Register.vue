<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle navbar-toggle-black"
                  @click="toggleNavbar"
                  data-toggle="collapse"
                  data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login" class="btn">
                Looking to login?
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="register-page">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <h2>Paper Dashboard PRO</h2>
                  <h4>Register for free and experience the dashboard today.</h4>
                  <hr>
                </div>
              </div>
              <div class="col-md-4 col-md-offset-2">
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-danger">
                      <i class="ti ti-user"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Free Account</h5>
                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.
                  </div>
                </div>
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-warning">
                      <i class="ti-bar-chart-alt"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Awesome Performances</h5>
                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.
                  </div>
                </div>
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-info">
                      <i class="ti-headphone"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Global Support</h5>
                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <form method="#" action="#">
                  <div class="card card-plain">
                    <div class="content">
                      <div class="form-group">
                        <input type="email" placeholder="Your First Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Your Last Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Company" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Enter email" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password Confirmation" class="form-control">
                      </div>
                    </div>
                    <div class="footer text-center">
                      <button type="button" class="btn btn-fill btn-danger btn-wd">Create Free Account</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer footer-transparent">
          <div class="container">
            <div class="copyright text-center">
              &copy; Coded with
              <i class="fa fa-heart heart"></i> by
              <a href="https://github.com/cristijora" target="_blank">Cristi Jora</a>.
              Designed by <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank">Creative Tim</a>.
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <li>
          <router-link to="/login">
            Looking to login?
          </router-link>
        </li>
        <li>
          <router-link to="/admin">
            Dashboard
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
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
