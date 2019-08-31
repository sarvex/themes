<template>
  <div class="section section-components pt-0">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-40 md-small-size-100">
          <h3 class="title">
            Basic Components
          </h3>
          <h6 class="description">
            The core elements of your website
          </h6>
          <h5 class="description">
            We re-styled every Bootstrap element to make it resemble Material
            Design and also fit with each other. All the Bootstrap components
            that you need in a development have been re-design with the new
            look. Besides the numerous basic elements, we have also created
            additional classes. All these items will help you take your project
            to the next level.
          </h5>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
          <div class="image-container">
            <img
              class="components-macbook"
              :src="sectionComponents.img1"
              alt=""
            >
            <img
              class="table-img"
              :src="sectionComponents.img2"
              alt=""
            >
            <img
              class="share-btn-img"
              :src="sectionComponents.img3"
              alt=""
            >
            <img
              class="coloured-card-btn-img"
              :src="sectionComponents.img4"
              alt=""
            >
            <img
              class="coloured-card-img"
              :src="sectionComponents.img5"
              alt=""
            >
            <img
              class="social-img"
              :src="sectionComponents.img6"
              alt=""
            >
            <img
              class="pin-btn-img"
              :src="sectionComponents.img7"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Components",
  data() {
    return {
      sectionComponents: {
        img1: require("@/assets/img/section-components/laptop-basics.png"),
        img2: require("@/assets/img/section-components/table.jpg"),
        img3: require("@/assets/img/section-components/share-btn.jpg"),
        img4: require("@/assets/img/section-components/coloured-card-with-btn.jpg"),
        img5: require("@/assets/img/section-components/coloured-card.jpg"),
        img6: require("@/assets/img/section-components/social-row.jpg"),
        img7: require("@/assets/img/section-components/pin-btn.jpg")
      }
    };
  }
};
</script>

<style lang="css"></style>
