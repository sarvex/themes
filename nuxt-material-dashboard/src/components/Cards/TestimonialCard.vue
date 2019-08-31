<template>
  <md-card class="md-card-testimonial">
    <md-card-header class="icon">
      <md-icon>
        <slot name="header-icon"></slot>
      </md-icon>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

    <md-card-actions md-alignment="left">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: "testimonial-card"
};
</script>
