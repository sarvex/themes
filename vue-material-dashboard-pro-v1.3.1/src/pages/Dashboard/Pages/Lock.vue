<template>
  <div class="md-layout text-center">
    <div class="md-layout-item md-size-50 md-small-size-100">
      <lock-card>
        <img class="img" slot="imageProfile" :src="image" />
        <h4 slot="title" class="title">Tania Andrew</h4>
        <md-field slot="content">
          <label>Enter Password</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>
        <md-button href class="md-success md-round" slot="footer"
          >Unlock</md-button
        >
      </lock-card>
    </div>
  </div>
</template>
<script>
import { LockCard } from "@/components";
export default {
  components: {
    LockCard
  },
  data() {
    return {
      password: null,
      image: "./img/faces/avatar.jpg"
    };
  }
};
</script>
<style></style>
