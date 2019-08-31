<template>
  <md-card class="md-card-global-sales">
    <md-card-header class="md-card-header-icon" :class="getClass(headerColor)">
      <slot name="header"></slot>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "global-sales-card",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  methods: {
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>

<style lang="css"></style>
