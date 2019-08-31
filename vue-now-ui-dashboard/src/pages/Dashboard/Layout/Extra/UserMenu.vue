<template>
  <div class="user user__menu">
    <div class="photo">
      <img :src="image" alt="avatar"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click.stop="toggleMenu" href="#">
           <span>
             {{title}}
             <b class="caret"></b>
          </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <collapse-transition>
          <ul class="nav user-menu__nav" v-show="!isClosed">
            <slot>
              <li>
                <a href="#vue">
                  <span class="sidebar-mini-icon">MP</span>
                  <span class="sidebar-normal">My Profile</span>
                </a>
              </li>
              <li>
                <a href="#vue">
                  <span class="sidebar-mini-icon">EP</span>
                  <span class="sidebar-normal">Edit Profile</span>
                </a>
              </li>
              <li>
                <a href="#vue">
                  <span class="sidebar-mini-icon">S</span>
                  <span class="sidebar-normal">Settings</span>
                </a>
              </li>
            </slot>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';

export default {
  name: 'user-menu',
  components: {
    CollapseTransition
  },
  props: {
    title: {
      type: String,
      default: 'James Amos'
    },
    image: {
      type: String,
      default: 'img/james.jpg'
    }
  },
  data() {
    return {
      isClosed: true
    };
  },
  methods: {
    toggleMenu() {
      this.isClosed = !this.isClosed;
    }
  }
};
</script>
<style>
  .user__menu ul.user-menu__nav {
    margin-top: 0;
    padding-top: 20px;
  }
</style>
