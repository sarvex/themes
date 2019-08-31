<template>
  <div class="section section-overview">
    <div
      class="section section-features-5 section-image"
      :style="features5"
    >
      <div class="md-layout">
        <div
          class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
        >
          <h2 class="title">
            Your life will be much easier
          </h2>
        </div>
      </div>
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              text-center
              icon="format_bold"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Bootstrap Grid
              </h4>
              <div
                slot="content"
                class="description"
              >
                <p>
                  Enjoy the fluid grid system based on 12 columns. Material Kit
                  PRO is built over Bootstrap and has all the benefits that the
                  framework comes with.
                </p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              text-center
              icon="phonelink"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Fully Responsive
              </h4>
              <div
                slot="content"
                class="description"
              >
                <p>
                  This Bootstrap kit is built mobile-first and looks amazing on
                  any device. Regardless of the screen size, the website content
                  will naturally fit the given resolution.
                </p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              text-center
              icon="access_time"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Save Time
              </h4>
              <div
                slot="content"
                class="description"
              >
                <p>
                  Using the Material Kit PRO will save you large amount of time.
                  You don't have to worry about customising the basic Bootstrap
                  design or generating new components.
                </p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              text-center
              icon="attach_money"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Save Money
              </h4>
              <div
                slot="content"
                class="description"
              >
                <p>
                  Creating your design from scratch with dedicated designers can
                  be very expensive. Using a kit is the best option to start
                  your development while bootstrapping your budget.
                </p>
              </div>
            </info-areas>
          </div>
        </div>
      </div>
    </div>
    <div class="section-testimonials team-3">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              Trusted by 330.000+ People
            </h2>
            <h5 class="description">
              The UI Kits, Templates and Dashboards that we've created are used
              by <b>330,000+ web developers</b> in over
              <b>576.000 Web Projects</b>. This is what some of them think:
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              small-img
              type="horizontal"
              :shadow-normal="true"
              :no-colored-shadow="true"
              :card-image="cardProfile.cardProfile1"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Khaldi Yass
                </h4>
                <p class="card-description">
                  "As soon as I saw this kit, everything else isn't the same
                  anymore, I just can't describe it guys! Thank you for this
                  work!"
                </p>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              small-img
              type="horizontal"
              :shadow-normal="true"
              :no-colored-shadow="true"
              :card-image="cardProfile.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Josh Murray
                </h4>
                <p class="card-description">
                  "Great kit! Used this for a client already and he is over the
                  moon. Keep up the good work Creative Tim! 10/10 for design,
                  colours, and the feel of the kit."
                </p>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              small-img
              type="horizontal"
              :shadow-normal="true"
              :no-colored-shadow="true"
              :card-image="cardProfile.cardProfile3"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Michael Onubogu
                </h4>
                <p class="card-description">
                  "Damn Daniel!!! This Material UI Kit is fresh AF! Amazing
                  work!
                </p>
              </template>
            </profile-card>
          </div>
        </div>
        <div class="our-clients">
          <div class="md-layout">
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img
                :src="clients.client1"
                alt=""
              >
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img
                :src="clients.client2"
                alt=""
              >
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img
                :src="clients.client3"
                alt=""
              >
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <img
                :src="clients.client4"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InfoAreas, ProfileCard } from "@/components";
export default {
  name: "Overview",
  components: {
    InfoAreas,
    ProfileCard
  },
  data() {
    return {
      image: require("@/assets/img/bg9.jpg"),
      cardProfile: {
        cardProfile1: require("@/assets/img/test1.jpg"),
        cardProfile2: require("@/assets/img/test2.jpg"),
        cardProfile3: require("@/assets/img/test3.jpg")
      },
      clients: {
        client1: require("@/assets/img/example-pages/vodafone.jpg"),
        client2: require("@/assets/img/example-pages/microsoft.jpg"),
        client3: require("@/assets/img/example-pages/harvard.jpg"),
        client4: require("@/assets/img/example-pages/stanford.jpg")
      }
    };
  },
  computed: {
    features5() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style lang="scss"></style>
