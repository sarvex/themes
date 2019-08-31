<template>
  <component :is="baseComponent"
             :to="link.path ? link.path : '/'"
             :class="{active: isActive || $route.fullPath.startsWith(link.path)}"
             tag="li">
    <a v-if="isMenu"
       data-toggle="collapse"
       href="javascript:void(0)"
       @click="collapseMenu">
      <i :class="link.icon"></i>
      <p>{{link.name}}
        <b class="caret"></b>
      </p>
    </a>
    <div v-if="$slots.default || this.isMenu">
      <el-collapse-transition>
        <ul class="nav" v-show="!collapsed">
          <slot></slot>
        </ul>
      </el-collapse-transition>
    </div>
    <slot name="title" v-if="children.length === 0 && !$slots.default && link.path">
      <component
        :to="link.path"
        :is="elementType(link, false)"
        :class="{active: link.active}"
        :target="link.target"
        :href="link.path">
        <template v-if="addLink">
          <span class="sidebar-mini">{{link.name.substring(0, 1)}}</span>
          <span class="sidebar-normal">{{link.name}}</span>
        </template>
        <template v-else>
          <i :class="link.icon"></i>
          <p>{{link.name}}</p>
        </template>
      </component>
    </slot>
  </component>
</template>
<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    props: {
      menu: {
        type: Boolean,
        default: false
      },
      link: {
        type: Object,
        default: () => {
          return {
            name: '',
            path: '',
            children: []
          }
        }
      }
    },
    provide () {
      return {
        addLink: this.addChild,
        removeLink: this.removeChild
      }
    },
    inject: {
      addLink: {default: null},
      removeLink: {default: null}
    },
    data () {
      return {
        children: [],
        collapsed: true
      }
    },
    computed: {
      baseComponent () {
        return this.isMenu || this.link.isRoute ? 'li' : 'router-link'
      },
      isMenu () {
        return this.children.length > 0 || this.menu === true
      },
      isActive () {
        if (this.$route) {
          let matchingRoute = this.children
            .find((c) => this.$route.path.startsWith(c.link.path))
          if (matchingRoute !== undefined) {
            return true
          }
        }
        return false
      }
    },
    methods: {
      addChild (item) {
        const index = this.$slots.default.indexOf(item.$vnode)
        this.children.splice(index, 0, item)
      },
      removeChild (item) {
        const tabs = this.children
        const index = tabs.indexOf(item)
        tabs.splice(index, 1)
      },
      elementType (link, isParent = true) {
        if (link.isRoute === false) {
          return isParent ? 'li' : 'a'
        } else {
          return 'router-link'
        }
      },
      linkAbbreviation (name) {
        const matches = name.match(/\b(\w)/g)
        return matches.join('')
      },
      collapseMenu () {
        this.collapsed = !this.collapsed
      },
      collapseSubMenu (link) {
        link.collapsed = !link.collapsed
      }
    },
    mounted () {
      if (this.addLink) {
        this.addLink(this)
      }
      if (this.link.collapsed !== undefined) {
        this.collapsed = this.link.collapsed
      }
      if (this.isActive && this.isMenu) {
        this.collapsed = false
      }
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      if (this.removeLink) {
        this.removeLink(this)
      }
    }
  }
</script>
<style>
</style>
