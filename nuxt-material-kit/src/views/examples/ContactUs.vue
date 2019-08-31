<template>
  <div class="wrapper">
    <div
      id="contactUs2Map"
      class="map"
    />
    <div class="main main-raised">
      <div class="section section-contact">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100 ml-auto">
              <h2 class="title mt-0">
                Send us a message
              </h2>
              <p class="description">
                You can contact us with anything related to our Products. We'll
                get in touch with you as soon as possible.
                <br>
                <br>
              </p>
              <form>
                <md-field>
                  <label>Your Name</label>
                  <md-input
                    v-model="name"
                    type="text"
                  />
                </md-field>
                <md-field>
                  <label>Email Adress</label>
                  <md-input
                    v-model="email"
                    type="email"
                  />
                </md-field>
                <md-field>
                  <label>Phone</label>
                  <md-input
                    v-model="phone"
                    type="number"
                  />
                </md-field>
                <md-field>
                  <label>Your message</label>
                  <md-textarea v-model="textarea" />
                </md-field>
                <div class="submit text-center mt-3">
                  <md-button class="md-primary md-round">
                    Contact Us
                  </md-button>
                </div>
              </form>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
              <info-areas
                class="pt-0"
                info-horizontal
                icon-color="primary"
                icon="pin_drop"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Find us at the office
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Bld Mihail Kogalniceanu, nr. 8, <br>
                    7652 Bucharest, <br>
                    Romania
                  </p>
                </div>
              </info-areas>
              <info-areas
                class="pt-0"
                info-horizontal
                icon-color="primary"
                icon="phone"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Give us a ring
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Michael Jordan <br>
                    +40 762 321 762 <br>
                    Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </info-areas>
              <info-areas
                class="pt-0"
                info-horizontal
                icon-color="primary"
                icon="business_center"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Legal Information
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Creative Tim Ltd. <br>
                    VAT · EN2341241 <br>
                    IBAN · EN8732ENGB2300099123 <br>
                    Bank · Great Britain Bank
                  </p>
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
import Mixins from "@/plugins/basicMixins";
import { InfoAreas } from "@/components";
export default {
  components: {
    InfoAreas
  },
  bodyClass: "contact-us",
  mixins: [Mixins.InitMap],
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      textarea: null
    };
  }
};
</script>

<style lang="scss" scoped>
.mt-3 {
  margin-top: 1.5rem;
}
</style>
