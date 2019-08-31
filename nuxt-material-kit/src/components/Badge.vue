<template>
  <component
    :is="tag"
    class="badge"
    :class="`badge-${type}`"
  >
    <slot />
  </component>
</template>
<script>
export default {
  name: "Badge",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    type: {
      type: String,
      default: "default",
      validator: value => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "rose",
          "default"
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    }
  }
};
</script>
<style></style>
