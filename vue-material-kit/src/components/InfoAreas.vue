<template>
  <div
    class="info"
    :class="{
      'info-horizontal': infoHorizontal,
      'text-right': textRight,
      'text-left': textLeft,
      'text-center': textCenter
    }"
  >
    <div
      class="icon"
      :class="infoColor"
    >
      <md-icon>{{ icon }}</md-icon>
    </div>
    <template v-if="!infoHorizontal">
      <slot name="title" />
      <slot name="content" />
    </template>
    <template v-else>
      <div class="description">
        <slot name="title" />
        <slot name="content" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "InfoAreas",
  props: {
    textCenter: Boolean,
    textRight: Boolean,
    textLeft: Boolean,
    infoHorizontal: Boolean,
    iconColor: String,
    icon: String
  },
  computed: {
    infoColor() {
      return this.iconColor ? `icon-${this.iconColor}` : "";
    }
  }
};
</script>

<style lang="scss"></style>
