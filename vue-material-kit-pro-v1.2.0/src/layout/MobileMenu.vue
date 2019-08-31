<template>
  <md-list
    v-if="navMobileSection === 'true'"
    class="nav-mobile-menu nav-mobile-section"
  >
    <slot />
  </md-list>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    navMobileSection: {
      type: String,
      default: "false"
    }
  }
};
</script>
