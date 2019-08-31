<template>
  <div class="section section-images">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-images-container">
            <img v-lazy="'img/hero-image-1.png'" alt />
          </div>
          <div class="hero-images-container-1">
            <img v-lazy="'img/hero-image-2.png'" alt />
          </div>
          <div class="hero-images-container-2">
            <img v-lazy="'img/hero-image-3.png'" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
