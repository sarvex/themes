<template>
  <div class="wrapper">
    <!-- Contact Us 1 -->
    <div
      class="section section-contactus-1 section-image"
      :style="sectionContactUs(contactus1)"
    >
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-40 md-small-size-100">
            <h2 class="title">
              Get in Touch
            </h2>
            <h5 class="description">
              You need more information? Check what other persons are saying
              about our product. They are very happy with their purchase.
            </h5>
            <info-areas
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
          </div>
          <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
            <md-card class="md-card-contact">
              <md-card-header class="md-card-header-primary text-center">
                <h4 class="card-title">
                  Contact Us
                </h4>
              </md-card-header>
              <md-card-content>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 md-small-size-100">
                    <md-field>
                      <label>First Name</label>
                      <md-input v-model="firstName" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50 md-small-size-100">
                    <md-field>
                      <label>Last Name</label>
                      <md-input v-model="lastName" />
                    </md-field>
                  </div>
                </div>
                <md-field>
                  <label>Email Adress</label>
                  <md-input
                    v-model="email"
                    type="email"
                  />
                </md-field>

                <md-field>
                  <label>Your Message</label>
                  <md-textarea v-model="textarea" />
                </md-field>
              </md-card-content>
              <md-card-actions class="d-flex justify-content-between">
                <md-checkbox v-model="boolean">
                  I'm not a robot
                </md-checkbox>
                <md-button class="md-primary">
                  Send Message
                </md-button>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Contact Us 1 -->

    <!-- Contact Us 2 -->
    <div class="section-contactus-2">
      <div
        id="contactUs2Map"
        class="map"
      />
      <div class="row">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <md-card class="md-card-contact">
            <md-card-header class="md-card-header-rose text-center">
              <h4 class="card-title">
                Contact Us
              </h4>
            </md-card-header>
            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <info-areas
                    info-horizontal
                    icon-color="rose"
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
                </div>
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <info-areas
                    info-horizontal
                    icon-color="rose"
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
                </div>
              </div>
              <div class="md-layout">
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <md-field>
                    <label>Full Name</label>
                    <md-input v-model="fullName" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <md-field>
                    <label>Email Adress</label>
                    <md-input
                      v-model="email1"
                      type="email"
                    />
                  </md-field>
                </div>
              </div>

              <md-field>
                <label>Your Message</label>
                <md-textarea v-model="textarea1" />
              </md-field>
            </md-card-content>
            <md-card-actions class="d-flex justify-content-between">
              <md-checkbox v-model="boolean">
                I'm not a robot
              </md-checkbox>
              <md-button class="md-rose">
                Send Message
              </md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
    </div>
    <!-- end Contact Us 2 -->
  </div>
</template>

<script>
import { InfoAreas } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    InfoAreas
  },
  mixins: [Mixins.InitMap],
  data() {
    return {
      firstName: null,
      fullName: null,
      lastName: null,
      textarea: null,
      textarea1: null,
      email: null,
      email1: null,
      boolean: false,
      contactus1: require("@/assets/img/examples/city.jpg")
    };
  },
  methods: {
    sectionContactUs(image) {
      return {
        backgroundImage: `url(${image})`
      };
    }
  }
};
</script>

<style lang="scss">
.justify-content-between {
  justify-content: space-between !important;
}
</style>
