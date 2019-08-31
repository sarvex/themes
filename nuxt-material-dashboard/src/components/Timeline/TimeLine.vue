<template>
  <md-card class="md-card-timeline" :class="{ 'md-card-plain': plain }">
    <ul class="timeline" :class="{ 'timeline-simple': type === 'simple' }">
      <slot></slot>
    </ul>
  </md-card>
</template>
<script>
export default {
  name: "time-line",
  props: {
    plain: Boolean,
    type: {
      type: String,
      default: ""
    }
  }
};
</script>
<style></style>
