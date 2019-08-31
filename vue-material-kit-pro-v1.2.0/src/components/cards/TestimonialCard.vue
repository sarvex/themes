<template>
  <md-card
    class="md-card-testimonial"
    :class="{ 'md-card-plain': cardPlain }"
  >
    <md-card-header>
      <div
        v-if="$slots.icon"
        class="icon icon-black"
      >
        <slot name="icon" />
      </div>
      <slot name="cardAvatarTop" />
    </md-card-header>
    <md-card-content v-if="$slots.cardContent">
      <slot name="cardContent" />
    </md-card-content>

    <md-card-actions
      v-if="$slots.cardAction"
      class="justify-content-center"
    >
      <slot name="cardAction" />
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    cardPlain: Boolean
  }
};
</script>

<style lang="scss"></style>
