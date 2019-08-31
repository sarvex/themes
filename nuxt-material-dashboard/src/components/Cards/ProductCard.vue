<template>
  <md-card
    class="md-card-product"
    @mouseleave.native="onMouseLeave"
    :data-count="hoverCount"
  >
    <md-card-header
      @mouseenter.native="onMouseOver"
      :data-header-animation="headerAnimation"
      :class="[
        { hovered: imgHovered },
        { hinge: headerDown },
        { fadeInDown: fixedHeader }
      ]"
      class="md-card-header-image animated"
    >
      <slot name="imageHeader"></slot>
    </md-card-header>

    <md-card-content>
      <div
        class="md-card-action-buttons text-center"
        v-if="headerAnimation === 'true'"
      >
        <md-button
          class="md-danger md-simple fix-broken-card"
          @click="fixHeader"
          v-if="headerDown"
        >
          <slot name="fixed-button"></slot> Fix Header!
        </md-button>
        <md-button class="md-simple md-just-icon">
          <slot name="first-button"></slot>
        </md-button>
        <md-button class="md-success md-simple md-just-icon">
          <slot name="second-button"></slot>
        </md-button>
        <md-button class="md-danger md-simple md-just-icon">
          <slot name="third-button"></slot>
        </md-button>
      </div>
      <slot name="title"></slot>
      <slot name="description"></slot>
    </md-card-content>

    <md-card-actions md-alignment="space-between">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "product-card",
  props: {
    headerAnimation: {
      type: String,
      default: "true"
    }
  },
  data() {
    return {
      hoverCount: 0,
      imgHovered: false,
      fixedHeader: false
    };
  },
  computed: {
    headerDown() {
      return this.hoverCount > 15;
    }
  },
  methods: {
    headerBack: function() {
      this.fixedHeader = false;
    },
    fixHeader: function() {
      this.hoverCount = 0;
      this.fixedHeader = true;

      setTimeout(this.headerBack, 480);
    },
    onMouseOver: function() {
      if (this.headerAnimation === "true") {
        this.imgHovered = true;
        this.hoverCount++;
      }
    },
    onMouseLeave: function() {
      if (this.headerAnimation === "true") {
        this.imgHovered = false;
      }
    }
  }
};
</script>

<style lang="scss"></style>
