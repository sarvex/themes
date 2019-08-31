<template>
  <md-card
    class="md-card-blog"
    :class="{
      'md-card-plain': cardPlain,
      'md-card-blogpost': type === 'horizontal'
    }"
  >
    <template v-if="type !== 'horizontal'">
      <md-card-header
        class="md-card-header-image"
        :shadow-normal="shadowNormal"
        :no-colored-shadow="noColoredShadow"
      >
        <a href="javascript:void(0)">
          <img
            class="img"
            :src="cardImage"
          >
          <div
            v-if="$slots.cardTitleHeader"
            class="card-title"
          >
            <slot name="cardTitleHeader" />
          </div>
        </a>
        <div
          v-if="!noColoredShadow && !shadowNormal"
          class="colored-shadow"
          :style="shadowImageBlog(cardImage)"
        />
      </md-card-header>

      <md-card-content v-if="$slots.cardContent">
        <slot name="cardContent" />
      </md-card-content>

      <md-card-actions v-if="$slots.cardAction">
        <slot name="cardAction" />
      </md-card-actions>
    </template>

    <template v-else>
      <div
        class="md-layout"
        :class="{ 'reverse-row': reverseRow }"
      >
        <div class="md-layout-item md-size-45 md-xsmall-size-100">
          <md-card-header
            class="md-card-header-image"
            :shadow-normal="shadowNormal"
            :no-colored-shadow="noColoredShadow"
          >
            <a href="javascript:void(0)">
              <img
                class="img"
                :src="cardImage"
              >
              <div
                v-if="$slots.cardTitleHeader"
                class="card-title"
              >
                <slot name="cardTitleHeader" />
              </div>
            </a>
            <div
              v-if="!noColoredShadow && !shadowNormal"
              class="colored-shadow"
              :style="shadowImageBlog(cardImage)"
            />
          </md-card-header>
        </div>
        <div class="md-layout-item md-size-55 md-xsmall-size-100">
          <md-card-content v-if="$slots.cardContent">
            <slot name="cardContent" />
          </md-card-content>
        </div>
      </div>
    </template>
  </md-card>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    type: String,
    reverseRow: Boolean,
    cardImage: String,
    shadowNormal: {
      type: Boolean,
      default: false
    },
    cardPlain: Boolean,
    noColoredShadow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    shadowImageBlog(image) {
      return {
        backgroundImage: `url(${image})`,
        opacity: 1
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reverse-row {
  flex-direction: row-reverse;
}
</style>
