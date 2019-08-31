<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h1 class="title">
              Let's get started
            </h1>
            <h4>
              To get started, you will need to choose a plan for your needs. You
              can opt in for the monthly of annual options and go with one fo
              the three listed below.
            </h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-pricing-2">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <tabs
                pills-align="center"
                :tab-active="1"
                :tab-name="['Monthly', 'Yearly']"
                plain
                color-button="success"
              >
                <!-- here you can add your content for tab-content -->
                <template slot="tab-pane-1" />
                <template slot="tab-pane-2" />
              </tabs>
            </div>
          </div>
          <div class="md-layout">
            <div
              class="md-layout-item md-layout-item md-size-33 md-small-size-100"
            >
              <pricing-card card-plain>
                <template slot="cardContent">
                  <h6 class="card-category text-info">
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
                    class="md-success md-round"
                  >
                    Get Started
                  </md-button>
                </template>
              </pricing-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <pricing-card card-bg="success">
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
              </pricing-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <pricing-card card-plain>
                <template slot="cardContent">
                  <h6 class="card-category text-info">
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
                    class="md-success md-round"
                  >
                    Get Started
                  </md-button>
                </template>
              </pricing-card>
            </div>
          </div>
        </div>
      </div>
      <div class="section pt-0 pb-0">
        <div class="container">
          <hr>
        </div>
      </div>
      <div class="section section-features-2">
        <div class="container">
          <div class="text-center">
            <h3 class="title">
              Frequently Asked Questions
            </h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
              <info-areas
                info-horizontal
                icon-color="info"
                icon="card_membership"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Can I cancel my subscription?
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Yes, you can cancel and perform other actions on your
                    subscriptions via the My Account page.
                  </p>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100 mr-auto">
              <info-areas
                info-horizontal
                icon-color="success"
                icon="card_giftcard"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  s there any discount for an annual subscription?
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Yes, we offer a 40% discount if you choose annual
                    subscription for any plan.
                  </p>
                </div>
              </info-areas>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
              <info-areas
                info-horizontal
                icon-color="success"
                icon="attach_money"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Which payment methods do you take?
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    WooCommerce comes bundled with PayPal (for accepting credit
                    card and PayPal account payments), BACS, and cash on
                    delivery for accepting payments.
                  </p>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100 mr-auto">
              <info-areas
                info-horizontal
                icon-color="rose"
                icon="question_answer"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Any other questions we can answer?
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>We are happy to help you. Contact us.</p>
                </div>
              </info-areas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, PricingCard, InfoAreas } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Tabs,
    PricingCard,
    InfoAreas
  },
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      image: require("@/assets/img/examples/bg-pricing.jpg")
    };
  }
};
</script>

<style lang="scss"></style>
