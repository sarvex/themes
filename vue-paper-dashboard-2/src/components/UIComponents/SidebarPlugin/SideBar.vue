<template>
  <div class="sidebar"
       :data-color="backgroundColor"
       :data-active-color="activeColor">
    <div class="logo">
      <a class="simple-text logo-mini"
         aria-label="sidebar mini logo"
         href="https://www.creative-tim.com/product/vue-paper-dashboard-2-pro">
          <div class="logo-img">
              <img :src="logo" alt="">
          </div>
      </a>
      <a class="simple-text logo-normal"
         href="https://www.creative-tim.com/vue-paper-dashboard-2-pro">
          {{ title }}
      </a>
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot>

      </slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-item v-for="(link, index) in sidebarLinks"
                        :key="link.name + index"
                        :link="link">

            <sidebar-item v-for="(subLink, index) in link.children"
                          :key="subLink.name + index"
                          :link="subLink">
            </sidebar-item>
          </sidebar-item>
        </slot>

      </ul>
    </div>
  </div>
</template>
<script>
  import 'perfect-scrollbar/dist/css/perfect-scrollbar.css'
  export default {
    props: {
      title: {
        type: String,
        default: 'Vue PDP Pro',
        description: 'Sidebar title'
      },
      backgroundColor: {
        type: String,
        default: 'black',
        validator: (value) => {
          let acceptedValues = ['white', 'brown', 'black']
          return acceptedValues.indexOf(value) !== -1
        },
        description: 'Sidebar background color (white|brown|black)'
      },
      activeColor: {
        type: String,
        default: 'success',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        },
        description: 'Sidebar active text color (primary|info|success|warning|danger)'
      },
      logo: {
        type: String,
        default: 'static/img/vue-logo.png',
        description: 'Sidebar Logo'
      },
      sidebarLinks: {
        type: Array,
        default: () => [],
        description: 'Sidebar links. Can be also provided as children components (sidebar-item)'
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        autoClose: this.autoClose
      }
    },
    methods: {
      async initScrollBarAsync () {
        let isWindows = navigator.platform.startsWith('Win');
        if(!isWindows) {
          return;
        }
        const PerfectScroll = await import('perfect-scrollbar')
        PerfectScroll.initialize(this.$refs.sidebarScrollArea)
      }
    },
    mounted () {
      this.initScrollBarAsync()
    },
    beforeDestroy () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false
      }
    }
  }

</script>
<style>
  @media (min-width: 992px) {
    .navbar-search-form-mobile,
    .nav-mobile-menu{
      display: none;
    }
  }
</style>
