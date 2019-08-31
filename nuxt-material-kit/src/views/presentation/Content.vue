<template>
  <div class="section section-content">
    <div class="container">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-33 md-small-size-100 md-medium-size-80 mx-auto"
        >
          <div class="section-description">
            <h3 class="title">
              Content Areas
            </h3>
            <h6 class="description">
              For Areas that Need More Space
            </h6>
            <h5 class="description">
              If you need elements such as tables, comments, description areas,
              tabs and many others, we've got you covered. We took into
              consideration multiple use cases and came up with some specific
              elements that you will love to use. They're beautiful and easy to
              use for the end user navigating your website.
            </h5>
          </div>
        </div>
        <div class="md-layout-item md-size-60 md-small-size-100 mx-auto">
          <div class="image-container">
            <img
              class="ipad-img"
              :src="sectionContent.img1"
            >
            <img
              class="area-img"
              data-aos="fade-up"
              data-aos-easing="mk-easing"
              data-aos-duration="750"
              :src="sectionContent.img2"
            >
            <img
              class="info-img"
              data-aos="fade-up"
              data-aos-easing="mk-easing"
              data-aos-duration="750"
              :src="sectionContent.img3"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "ContentAreas",
  data() {
    return {
      sectionContent: {
        img1: require("@/assets/img/section-components/presentation-ipad.jpg"),
        img2: require("@/assets/img/section-components/ipad-comments.jpg"),
        img3: require("@/assets/img/section-components/ipad-table.jpg")
      }
    };
  },
  created() {
    AOS.init();
  }
};
</script>

<style lang="scss">
[data-aos] {
  body[data-aos-easing="mk-easing"] &,
  &[data-aos][data-aos-easing="mk-easing"] {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
}
</style>
