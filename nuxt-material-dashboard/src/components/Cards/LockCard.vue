<template>
  <md-card class="md-card-profile" :class="{ 'md-card-hidden': cardHidden }">
    <md-card-header>
      <div class="md-card-avatar">
        <slot name="imageProfile"></slot>
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="title"></slot>
      <slot name="content"></slot>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "lock-card",
  props: {
    imageProfile: {
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
    }
  }
};
</script>

<style lang="css"></style>

<!-- <div class="card card-profile text-center card-hidden">
  <div class="card-header ">
    <div class="card-avatar">
      <a href="#pablo">
        <img class="img" src="../../assets/img/faces/avatar.jpg">
      </a>
    </div>
  </div>
  <div class="card-body ">
    <h4 class="card-title">Tania Andrew</h4>
    <div class="form-group">
      <label for="exampleInput1" class="bmd-label-floating">Enter Password</label>
      <input type="email" class="form-control" id="exampleInput1">
    </div>
  </div>
  <div class="card-footer justify-content-center">
    <a href="#pablo" class="btn btn-rose btn-round">Unlock</a>
  </div>
</div> -->
