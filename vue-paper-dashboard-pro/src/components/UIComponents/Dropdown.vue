<template>
  <div :is="tag" :class="[getSlideClass, {open:isOpen}]" @click="toggleDropDown" v-click-outside="closeDropDown">
    <slot name="title">
      <a class="dropdown-toggle btn-rotate" data-toggle="dropdown" href="javascript:void(0)">
        <i :class="icon"></i>
        <p class="notification">{{title}}
          <b class="caret"></b>
        </p>
      </a>
    </slot>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'drop-down',
    props: {
      title: String,
      icon: String,
      slide: {
        type: String,
        default: 'down'
      },
      tag: {
        type: String,
        default: 'div'
      }
    },
    computed: {
      getSlideClass () {
        return this.slide === 'down' ? 'dropdown' : 'dropup'
      }
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      }
    }
  }
</script>
