<template>
  <md-card
    class="md-card-background"
    :class="{ 'md-card-pricing': cardPricing }"
    :style="bgFullCards(cardImage)"
  >
    <md-card-content v-if="$slots.cardContent">
      <slot name="cardContent" />
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "FullBgCard",
  props: {
    cardPricing: Boolean,
    cardImage: String
  },
  methods: {
    bgFullCards(cardImage) {
      return {
        backgroundImage: `url(${cardImage})`
      };
    }
  }
};
</script>
