<template>
  <md-card
    class="md-card-login"
    :class="{ 'md-card-hidden': cardHidden }"
  >
    <md-card-header :class="getClass(headerColor)">
      <slot name="title" />
      <div class="social-line">
        <slot name="buttons" />
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="description" />
      <slot name="inputs" />
    </md-card-content>

    <md-card-actions>
      <slot name="footer" />
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "LoginCard",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cardHidden: true
    };
  },
  beforeMount() {
    setTimeout(this.showCard, 400);
  },
  methods: {
    showCard: function() {
      this.cardHidden = false;
    },
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>

<style lang="css"></style>
