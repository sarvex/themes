<template>
  <div class="wrapper">
    <!-- Pricing 1 -->
    <div
      class="section section-pricing-1 section-image"
      :style="sectionPricing(pricing1)"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h2 class="title">
              Pick the best plan for you
            </h2>
            <h5 class="description">
              You have Free Unlimited Updates and Premium Support on each
              package.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 md-large-size-25"
          >
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Freelancer
                </h6>
                <div class="icon">
                  <i class="material-icons">weekend</i>
                </div>
                <h3 class="card-title">
                  Free
                </h3>
                <p class="card-description">
                  This is good if your company size is between 2 and 10 Persons.
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-round"
                >
                  Choose Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div
            class="md-layout-item md-size-50 md-small-size-100 md-large-size-25"
          >
            <pricing-card>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Small Company
                </h6>
                <div class="icon icon-rose">
                  <i class="material-icons">people</i>
                </div>
                <h3 class="card-title">
                  $29
                </h3>
                <p class="card-description">
                  This is good if your company size is between 2 and 10 Persons.
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-rose md-round"
                >
                  Choose Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div
            class="md-layout-item md-size-50 md-small-size-100 md-large-size-25"
          >
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Medium Company
                </h6>
                <div class="icon">
                  <i class="material-icons">business</i>
                </div>
                <h3 class="card-title">
                  $69
                </h3>
                <p class="card-description">
                  This is good if your company size is between 11 and 99
                  Persons.
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-round"
                >
                  Choose Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div
            class="md-layout-item md-size-50 md-small-size-100 md-large-size-25"
          >
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Enterprise
                </h6>
                <div class="icon">
                  <i class="material-icons">account_balance</i>
                </div>
                <h3 class="card-title">
                  $159
                </h3>
                <p class="card-description">
                  This is good if your company size is 99+ persons.
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-white md-round"
                >
                  Choose Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Pricing 1 -->

    <!-- Pricing 2 -->
    <div class="section section-pricing-2">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h2 class="title">
              Pick the best plan for you
            </h2>
            <tabs
              pills-align="center"
              :tab-active="1"
              :tab-name="['Monthly', 'Yearly']"
              plain
              color-button="rose"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1" />
              <template slot="tab-pane-2" />
            </tabs>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Free
                </h6>
                <h1 class="card-title">
                  <small>$</small>0
                  <small>/mo</small>
                </h1>
                <ul>
                  <li><b>1</b> Project</li>
                  <li><b>5</b> Team Members</li>
                  <li><b>55</b> Personal Contacts</li>
                  <li><b>5.000</b> Messages</li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-rose md-round"
                >
                  Get Started
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <full-bg-card
              card-pricing
              :card-image="cardPricing2.cardPricing1"
            >
              <template slot="cardContent">
                <h6 class="card-category">
                  Premium
                </h6>
                <h1 class="card-title">
                  <small>$</small>89
                  <small>/mo</small>
                </h1>
                <ul>
                  <li><b>500</b> Project</li>
                  <li><b>50</b> Team Members</li>
                  <li><b>125</b> Personal Contacts</li>
                  <li><b>15.000</b> Messages</li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-white md-round"
                >
                  Get Started
                </md-button>
              </template>
            </full-bg-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Platinium
                </h6>
                <h1 class="card-title">
                  <small>$</small>199
                  <small>/mo</small>
                </h1>
                <ul>
                  <li><b>1000</b> Project</li>
                  <li><b>100</b> Team Members</li>
                  <li><b>550</b> Personal Contacts</li>
                  <li><b>50.000</b> Messages</li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-rose md-round"
                >
                  Get Started
                </md-button>
              </template>
            </pricing-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Pricing 2 -->

    <!-- Pricing 3 -->
    <div
      class="section section-pricing-3 section-image"
      :style="sectionPricing(pricing3)"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h2 class="title">
              Pick the best plan for you
            </h2>
            <h5 class="description">
              You have Free Unlimited Updates and Premium Support on each
              package.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
            <pricing-card>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Free
                </h6>
                <h1 class="card-title">
                  <small>$</small>0
                  <small>/mo</small>
                </h1>
                <ul>
                  <li><b>1</b> Project</li>
                  <li><b>5</b> Team Members</li>
                  <li><b>55</b> Personal Contacts</li>
                  <li><b>5.000</b> Messages</li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-primary md-round"
                >
                  Get Started
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100 mr-auto">
            <pricing-card card-bg="primary">
              <template slot="cardContent">
                <h6 class="card-category">
                  Premium
                </h6>
                <h1 class="card-title">
                  <small>$</small>199
                  <small>/mo</small>
                </h1>
                <ul>
                  <li><b>1000</b> Project</li>
                  <li><b>100</b> Team Members</li>
                  <li><b>550</b> Personal Contacts</li>
                  <li><b>50.000</b> Messages</li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-white md-round"
                >
                  Get Started
                </md-button>
              </template>
            </pricing-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Pricing 3 -->

    <!-- Pricing 4 -->
    <div class="section section-pricing-4">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h2 class="title">
              Pick the best plan for you
            </h2>
            <h5 class="description">
              You have Free Unlimited Updates and Premium Support on each
              package.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-25 md-small-size-100">
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Startup
                </h6>
                <h1 class="card-title">
                  <small>$</small>0
                </h1>
                <ul>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Sharing Tools
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Design Tools
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Private
                    Messages
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Personal Brand
                  </li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-danger md-round"
                >
                  Downgrade Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <pricing-card card-bg="success">
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Small Company
                </h6>
                <h1 class="card-title">
                  <small>$</small>89
                </h1>
                <ul>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Sharing Tools
                  </li>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Design Tools
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Private
                    Messages
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Personal Brand
                  </li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-white md-round disabled"
                >
                  Current Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Large Company
                </h6>
                <h1 class="card-title">
                  <small>$</small>189
                </h1>
                <ul>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Sharing Tools
                  </li>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Design Tools
                  </li>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Private
                    Messages
                  </li>
                  <li>
                    <md-icon class="text-danger">
                      close
                    </md-icon> Personal Brand
                  </li>
                </ul>

                <md-button
                  href="javascript:void(0)"
                  class="md-success md-round"
                >
                  Upgrade Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <pricing-card card-plain>
              <template slot="cardContent">
                <h6 class="card-category text-gray">
                  Enterprise
                </h6>
                <h1 class="card-title">
                  <small>$</small>389
                </h1>
                <ul>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Sharing Tools
                  </li>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Design Tools
                  </li>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Private
                    Messages
                  </li>
                  <li>
                    <md-icon class="text-success">
                      check
                    </md-icon> Personal Brand
                  </li>
                </ul>
                <md-button
                  href="javascript:void(0)"
                  class="md-success md-round"
                >
                  Upgrade Plan
                </md-button>
              </template>
            </pricing-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Pricing 4 -->

    <!-- Pricing 5 -->
    <div class="section section-pricing-5 section-gray">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <h2 class="title">
              Choose a plan for your next project
            </h2>
            <tabs
              pills-align="left"
              :tab-active="1"
              :tab-name="['Personal', 'Commercial']"
              plain
              color-button="primary"
              :on-change="changePrices"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1" />
              <template slot="tab-pane-2" />
            </tabs>
            <p class="text-gray">
              You have Free Unlimited Updates and Premium Support on each
              package. You also have 20 days to request a refund if you're not
              happy with your purchase.
            </p>
          </div>
          <div class="md-layout-item md-size-60 md-small-size-100 mx-auto">
            <div class="md-layout">
              <div class="md-layout-item md-size-50 md-small-size-100">
                <pricing-card>
                  <template slot="cardContent">
                    <h6 class="card-category text-gray">
                      Html Package
                    </h6>
                    <h1 class="card-title">
                      <small>$</small>
                      <template
                        v-if="personal"
                      >
                        0
                      </template>
                      <template
                        v-else
                      >
                        159
                      </template>
                      <small>/mo</small>
                    </h1>
                    <ul>
                      <li>
                        <b>
                          <template
                            v-if="personal"
                          >1</template>
                          <template
                            v-else
                          >5+</template>
                        </b>
                        Developer
                      </li>
                      <li>
                        <b>
                          <template
                            v-if="personal"
                          >99+</template>
                          <template
                            v-else
                          >199+</template>
                        </b>
                        Componets
                      </li>
                      <li><b>HTML</b> Elements</li>
                      <li>
                        <b>
                          <template
                            v-if="personal"
                          >14</template>
                          <template
                            v-else
                          >24</template>
                        </b>
                        Page Examples
                      </li>
                    </ul>

                    <md-button
                      href="javascript:void(0)"
                      class="md-primary md-round"
                    >
                      <template
                        v-if="personal"
                      >
                        Free Download
                      </template>
                      <template
                        v-else
                      >
                        Buy Now!
                      </template>
                    </md-button>
                  </template>
                </pricing-card>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <pricing-card card-plain>
                  <template slot="cardContent">
                    <h6 class="card-category text-gray">
                      Html & Sketch Package
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
                        299
                      </template>
                      <small>/mo</small>
                    </h1>
                    <ul>
                      <li>
                        <b>
                          <template
                            v-if="personal"
                          >1</template>
                          <template
                            v-else
                          >10+</template>
                        </b>
                        Developer
                      </li>
                      <li>
                        <b>
                          <template
                            v-if="personal"
                          >199+</template>
                          <template
                            v-else
                          >299+</template>
                        </b>
                        Componets
                      </li>
                      <li><b>HTML & Sketch</b> Elements</li>
                      <li>
                        <b>
                          <template
                            v-if="personal"
                          >22</template>
                          <template
                            v-else
                          >45</template>
                        </b>
                        Page Examples
                      </li>
                    </ul>

                    <md-button
                      href="javascript:void(0)"
                      class="md-white md-round"
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
    </div>
    <!-- end Pricing 5 -->
  </div>
</template>

<script>
import { Tabs, FullBgCard, PricingCard } from "@/components";

export default {
  name: "Pricing",
  components: {
    PricingCard,
    FullBgCard,
    Tabs
  },
  data() {
    return {
      personal: true,
      pricing1: require("@/assets/img/bg11.jpg"),
      pricing3: require("@/assets/img/examples/city.jpg"),
      cardPricing2: {
        cardPricing1: require("@/assets/img/examples/card-blog3.jpg")
      }
    };
  },
  methods: {
    sectionPricing(image) {
      return {
        backgroundImage: `url(${image})`
      };
    },
    changePrices() {
      this.personal = !this.personal;
    }
  }
};
</script>

<style lang="css"></style>
