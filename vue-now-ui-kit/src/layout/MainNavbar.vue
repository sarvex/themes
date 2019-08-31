<template>
  <navbar
    position="fixed"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{toggle, isToggled}">
      <router-link v-popover:popover1 class="navbar-brand" to="/presentation">Now Ui Kit Pro</router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">Designed by Invision. Coded by Creative Tim</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Components" icon="now-ui-icons design_app" class="nav-item">
        <nav-link to="/components">
          <i class="now-ui-icons business_chart-pie-36"></i> Components
        </nav-link>
        <a
          href="https://demos.creative-tim.com/vue-now-ui-kit-pro/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down>
      <drop-down tag="li" title="sections" icon="now-ui-icons files_paper" class="nav-item">
        <nav-link class="dropdown-item" to="/sections#headers">
          <i class="now-ui-icons shopping_box"></i> Headers
        </nav-link>
        <nav-link class="dropdown-item" to="/sections#features">
          <i class="now-ui-icons ui-2_settings-90"></i> Features
        </nav-link>
        <nav-link class="dropdown-item" to="/sections#blogs">
          <i class="now-ui-icons text_align-left"></i> Blogs
        </nav-link>
        <nav-link class="dropdown-item" to="/sections#teams">
          <i class="now-ui-icons sport_user-run"></i> Teams
        </nav-link>
        <nav-link class="dropdown-item" to="/sections#projects">
          <i class="now-ui-icons education_paper"></i> Projects
        </nav-link>
        <nav-link class="dropdown-item" to="/sections#pricing">
          <i class="now-ui-icons business_money-coins"></i> Pricing
        </nav-link>
        <nav-link class="dropdown-item" to="/sections#testimonials">
          <i class="now-ui-icons ui-2_chat-round"></i> Testimonials
        </nav-link>
        <nav-link class="dropdown-item" to="/sections#contactus">
          <i class="now-ui-icons tech_mobile"></i> Contact Us
        </nav-link>
      </drop-down>

      <drop-down tag="li" title="Examples" icon="now-ui-icons design_image" class="nav-item">
        <nav-link to="/about">
          <i class="now-ui-icons business_bulb-63"></i> About-us
        </nav-link>
        <nav-link to="/blog-post">
          <i class="now-ui-icons text_align-left"></i> Blog Post
        </nav-link>
        <nav-link class="dropdown-item" to="/blog-posts">
          <i class="now-ui-icons design_bullet-list-67"></i> Blog Posts
        </nav-link>
        <nav-link class="dropdown-item" to="/contact">
          <i class="now-ui-icons location_pin"></i> Contact Us
        </nav-link>
        <nav-link class="dropdown-item" to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing Page
        </nav-link>
        <nav-link class="dropdown-item" to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login Page
        </nav-link>
        <nav-link class="dropdown-item" to="/pricing">
          <i class="now-ui-icons business_money-coins"></i> Pricing
        </nav-link>
        <nav-link class="dropdown-item" to="/ecommerce">
          <i class="now-ui-icons shopping_shop"></i> Ecommerce Page
        </nav-link>
        <nav-link class="dropdown-item" to="/product">
          <i class="now-ui-icons shopping_bag-16"></i> Product Page
        </nav-link>
        <nav-link class="dropdown-item" to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile Page
        </nav-link>
        <nav-link class="dropdown-item" to="/signup">
          <i class="now-ui-icons tech_mobile"></i> Signup Page
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link btn btn-primary"
          href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
          target="_blank"
        >
          <p>Buy Now</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
  },
};
</script>
