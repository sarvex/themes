<template>
  <div class="wrapper">
    <!-- Testimonials 1 -->
    <div
      class="section section-testimonials-1 section-image"
      :style="sectionTestimonials(testimonials1)"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              Our Clients Love Us
            </h2>
            <h5 class="description">
              You need more information? Check what other persons are saying
              about our product. They are very happy with their purchase.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <testimonial-card>
              <md-icon slot="icon">
                format_quote
              </md-icon>
              <template slot="cardContent">
                <h5 class="card-description">
                  "Your products, all the kits that I have downloaded from your
                  site and worked with are sooo cool! I love the color mixtures,
                  cards... everything. Keep up the great work!"
                </h5>
              </template>
              <template slot="cardAction">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category">
                  @alecthompson
                </h6>
                <div class="md-card-avatar">
                  <a href="javascript:void(0)">
                    <img
                      class="img"
                      :src="sectionTestimonials1.testimonials1"
                    >
                  </a>
                </div>
              </template>
            </testimonial-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <testimonial-card>
              <md-icon slot="icon">
                format_quote
              </md-icon>
              <template slot="cardContent">
                <h5 class="card-description">
                  "Don't be scared of the truth because we need to restart the
                  human foundation in truth. That's why I love you like Kanye
                  loves Kanye I love Rick Owens’ bed design but the back is not
                  so attractive"
                </h5>
              </template>
              <template slot="cardAction">
                <h4 class="card-title">
                  Gina Andrew
                </h4>
                <h6 class="card-category">
                  @ginaandrew
                </h6>
                <div class="md-card-avatar">
                  <a href="javascript:void(0)">
                    <img
                      class="img"
                      :src="sectionTestimonials1.testimonials2"
                    >
                  </a>
                </div>
              </template>
            </testimonial-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <testimonial-card>
              <md-icon slot="icon">
                format_quote
              </md-icon>
              <template slot="cardContent">
                <h5 class="card-description">
                  Your products, all the kits that I have downloaded from your
                  site and worked with are sooo cool! I love the color mixtures,
                  cards... everything. Keep up the great work!
                </h5>
              </template>
              <template slot="cardAction">
                <h4 class="card-title">
                  George West
                </h4>
                <h6 class="card-category">
                  @georgewest
                </h6>
                <div class="md-card-avatar">
                  <a href="javascript:void(0)">
                    <img
                      class="img"
                      :src="sectionTestimonials1.testimonials3"
                    >
                  </a>
                </div>
              </template>
            </testimonial-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Testimonials 1 -->

    <!-- Testimonials 2 -->
    <div class="section section-testimonials-2 section-dark">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <el-carousel
              indicator-position="none"
              trigger="click"
              :interval="5000"
            >
              <el-carousel-item>
                <testimonial-card card-plain>
                  <div
                    slot="cardAvatarTop"
                    class="md-card-avatar mt-0"
                  >
                    <a href="javascript:void(0)">
                      <img
                        class="img"
                        :src="sectionTestimonials2.testimonials1"
                      >
                    </a>
                  </div>
                  <template slot="cardContent">
                    <h5 class="card-description">
                      "I speak yell scream directly at the old guard on behalf
                      of the future. I gotta say at that time I’d like to meet
                      Kanye I speak yell scream directly at the old guard on
                      behalf of the future. My brother Chance!!! <br>Thank you
                      for letting me work on this masterpiece. One of my
                      favorite people."
                    </h5>
                    <h4 class="card-title">
                      Kendall Thompson
                    </h4>
                    <h6 class="card-category text-muted">
                      CEO @ Marketing Digital Ltd.
                    </h6>
                  </template>
                  <template slot="cardAction">
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                  </template>
                </testimonial-card>
              </el-carousel-item>
              <el-carousel-item>
                <testimonial-card card-plain>
                  <div
                    slot="cardAvatarTop"
                    class="md-card-avatar mt-0"
                  >
                    <a href="javascript:void(0)">
                      <img
                        class="img"
                        :src="sectionTestimonials2.testimonials2"
                      >
                    </a>
                  </div>
                  <template slot="cardContent">
                    <h5 class="card-description">
                      "Thank you Anna for the invite thank you to the whole
                      Vogue team Called I Miss the Old Kanye At the God's last
                      game Chop up the soul Kanye. I promise I will never let
                      the people down. I want a better life for all!!! Pablo
                      Pablo Pablo Pablo! Thank you Anna for the invite thank you
                      to the whole Vogue team."
                    </h5>
                    <h4 class="card-title">
                      Christian Louboutin
                    </h4>
                    <h6 class="card-category text-muted">
                      Designer @ Louboutin &amp; Co.
                    </h6>
                  </template>
                  <template slot="cardAction">
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                    <md-icon class="text-warning">
                      star
                    </md-icon>
                  </template>
                </testimonial-card>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- end Testimonials 2 -->

    <!-- Testimonials 3 -->
    <div class="section section-testimonials-3">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              What Clients Say
            </h2>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <testimonial-card card-plain>
              <div
                slot="cardAvatarTop"
                class="md-card-avatar mt-0"
              >
                <a href="javascript:void(0)">
                  <img
                    class="img"
                    :src="sectionTestimonials1.testimonials1"
                  >
                </a>
              </div>
              <template slot="cardContent">
                <h4 class="card-title">
                  Mike Andrew
                </h4>
                <h6 class="card-category text-muted">
                  CEO @ Marketing Digital Ltd.
                </h6>
                <h5 class="card-description">
                  "I speak yell scream directly at the old guard on behalf of
                  the future. I gotta say at that time I’d like to meet Kanye I
                  speak yell scream directly at the old guard on behalf of the
                  future."
                </h5>
              </template>
            </testimonial-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <testimonial-card card-plain>
              <div
                slot="cardAvatarTop"
                class="md-card-avatar mt-0"
              >
                <a href="javascript:void(0)">
                  <img
                    class="img"
                    :src="sectionTestimonials1.testimonials2"
                  >
                </a>
              </div>
              <template slot="cardContent">
                <h4 class="card-title">
                  Tina Thompson
                </h4>
                <h6 class="card-category text-muted">
                  Marketing @ Apple Inc.
                </h6>
                <h5 class="card-description">
                  "I promise I will never let the people down. I want a better
                  life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna for
                  the invite thank you to the whole Vogue team It wasn’t any
                  Kanyes I love Rick Owens’ bed design but the back is too high
                  for the beams and angle of the ceiling"
                </h5>
              </template>
            </testimonial-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <testimonial-card card-plain>
              <div
                slot="cardAvatarTop"
                class="md-card-avatar mt-0"
              >
                <a href="javascript:void(0)">
                  <img
                    class="img"
                    :src="sectionTestimonials3.testimonials1"
                  >
                </a>
              </div>
              <template slot="cardContent">
                <h4 class="card-title">
                  Gina West
                </h4>
                <h6 class="card-category text-muted">
                  CFO @ Apple Inc.
                </h6>
                <h5 class="card-description">
                  "I've been trying to figure out the bed design for the master
                  bedroom at our Hidden Hills compound... Royère doesn't make a
                  Polar bear bed but the Polar bear. This is a very nice
                  testimonial about this company."
                </h5>
              </template>
            </testimonial-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Testimonials 3 -->
  </div>
</template>

<script>
import { TestimonialCard } from "@/components";

export default {
  name: "Testimonials",
  components: {
    TestimonialCard
  },
  data() {
    return {
      testimonials1: require("@/assets/img/dg2.jpg"),
      sectionTestimonials1: {
        testimonials1: require("@/assets/img/faces/card-profile1-square.jpg"),
        testimonials2: require("@/assets/img/faces/card-profile4-square.jpg"),
        testimonials3: require("@/assets/img/faces/card-profile2-square.jpg")
      },
      sectionTestimonials2: {
        testimonials1: require("@/assets/img/faces/kendall.jpg"),
        testimonials2: require("@/assets/img/faces/christian.jpg")
      },
      sectionTestimonials3: {
        testimonials1: require("@/assets/img/faces/card-profile6-square.jpg")
      }
    };
  },
  methods: {
    sectionTestimonials(image) {
      return {
        backgroundImage: `url(${image})`
      };
    }
  }
};
</script>

<style lang="scss">
.mt-0 {
  margin-top: 0 !important;
}
</style>
