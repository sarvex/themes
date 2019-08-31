<template>
  <div class="section section-pricing">
    <div class="container">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
        >
          <h2 class="title">
            Ready to grab Material Kit PRO?
          </h2>
          <tabs
            pills-align="center"
            :tab-active="1"
            :tab-name="['Personal License', 'Developer License']"
            plain
            color-button="rose"
            :on-change="changePrices"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1" />
            <template slot="tab-pane-2" />
          </tabs>

          <p
            v-if="personal"
            class="description"
          >
            Good for personal websites, school projects, startups or any other
            project where your users will not be charged for using it. Create
            one single website/app for one client.
          </p>
          <p
            v-else
            class="description"
          >
            Good for business projects, multiple websites for clients or for
            creating themes where your users will be charged for using it.
            Create multiple websites/apps for multiple clients.
          </p>
        </div>

        <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <pricing-card class="md-card-margin">
                <template slot="cardContent">
                  <h6 class="card-category text-gray">
                    Html Package
                  </h6>
                  <h1 class="card-title">
                    <small>$</small>
                    <template
                      v-if="personal"
                    >
                      79
                    </template>
                    <template
                      v-else
                    >
                      319
                    </template>
                  </h1>
                  <ul>
                    <li>
                      <b>
                        HTML/CSS/JS/SASS
                      </b>
                      Files
                    </li>
                    <li>
                      <b>
                        Fully Coded
                      </b>
                      Componets
                    </li>
                    <li>
                      <b>
                        Responsive
                      </b>
                      Design
                    </li>
                    <li>
                      Product
                      <b>
                        Documentation
                      </b>
                    </li>
                  </ul>

                  <md-button
                    href="https://www.creative-tim.com/product/vue-material-kit-pro?license=1"
                    target="_blank"
                    class="md-rose md-round"
                  >
                    Buy Now!
                  </md-button>
                </template>
              </pricing-card>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <pricing-card>
                <template slot="cardContent">
                  <h6 class="card-category text-gray">
                    Html & Photoshop Package
                  </h6>
                  <h1 class="card-title">
                    <small>$</small>
                    <template
                      v-if="personal"
                    >
                      139
                    </template>
                    <template
                      v-else
                    >
                      599
                    </template>
                    <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>
                        HTML/CSS/JS/SASS
                      </b>
                      Files
                    </li>
                    <li>
                      <b>
                        Fully Coded
                      </b>
                      Componets
                    </li>
                    <li><b>Responsive </b> Design</li>
                    <li>
                      Product
                      <b>
                        Documentation
                      </b>
                    </li>
                    <li>
                      <b>
                        + Photoshop
                      </b>
                      Files
                    </li>
                    <li>
                      <b>
                        + Components
                      </b>
                      on Layers
                    </li>
                  </ul>

                  <md-button
                    href="https://www.creative-tim.com/product/vue-material-kit-pro?license=1&amp;package=3"
                    target="_blank"
                    class="md-rose md-round"
                  >
                    Buy Now!
                  </md-button>
                </template>
              </pricing-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social-line text-center">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item">
            <h4 class="title">
              Thank you for sharing!
            </h4>
            <md-button
              href="javascript:void(0)"
              class="md-twitter md-round"
            >
              <i class="fab fa-twitter" /> Twitter
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-facebook md-round"
            >
              <i class="fab fa-facebook-f" /> Facebook
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-google md-round"
            >
              <i class="fab fa-google-plus-g" /> Google
            </md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, PricingCard } from "@/components";
export default {
  name: "Pricing",
  components: {
    Tabs,
    PricingCard
  },
  data() {
    return {
      personal: true
    };
  },
  methods: {
    changePrices() {
      this.personal = !this.personal;
    }
  }
};
</script>

<style lang="scss"></style>
