<template>
  <div class="section section-cards section-dark">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-60 md-small-size-100">
          <div class="image-container">
            <img
              class="img"
              :src="sectionCards.img1"
            >
          </div>
        </div>
        <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
          <div class="section-description">
            <h3 class="title">
              Unconventional Cards
            </h3>
            <h6 class="description">
              One Card for Every Problem
            </h6>
            <h5 class="description">
              We love cards and everybody on the web seems to. We have gone
              above and beyond with options for you to organise your
              information. From cards designed for blog posts, to product cards
              or user profiles, you will have many options to choose from. All
              the cards follow the material principles and have a design that
              stands out.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      sectionCards: {
        img1: require("@/assets/img/cards-test.png")
      }
    };
  }
};
</script>

<style lang="css"></style>
