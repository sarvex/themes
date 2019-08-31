<template>
  <div
    class="rotating-card-container"
    :class="{ 'manual-flip': manualRotate, hover: manualRotateState }"
  >
    <md-card
      class="md-card-rotate"
      :class="[cardClass, cardColor]"
    >
      <div
        class="front"
        :class="{ 'front-background': layerBackground }"
        :style="bgFrontFullCards(frontCardImage)"
      >
        <md-card-content v-if="$slots.frontRotateCardContent">
          <slot name="frontRotateCardContent" />
        </md-card-content>
        <md-card-actions v-if="$slots.frontCardAction">
          <slot name="frontCardAction" />
        </md-card-actions>
      </div>

      <div
        class="back"
        :class="{ 'back-background': layerBackground }"
        :style="bgBackFullCards(backCardImage)"
      >
        <md-card-content v-if="$slots.backRotateCardContent">
          <slot name="backRotateCardContent" />
        </md-card-content>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "RotatingCard",
  props: {
    frontCardImage: String,
    backCardImage: String,
    cardClass: String,
    cardBg: String,
    layerBackground: Boolean,
    manualRotate: Boolean,
    manualRotateState: Boolean
  },
  computed: {
    cardColor() {
      return this.cardBg ? `bg-${this.cardBg}` : "";
    }
  },
  methods: {
    bgFrontFullCards(frontCardImage) {
      if (this.frontCardImage) {
        return {
          backgroundImage: `url(${frontCardImage})`
        };
      }
    },
    bgBackFullCards(backCardImage) {
      if (this.backCardImage) {
        return {
          backgroundImage: `url(${backCardImage})`
        };
      }
    }
  }
};
</script>

<style lang="scss"></style>
