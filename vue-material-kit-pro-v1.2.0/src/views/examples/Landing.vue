<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <h1 class="title">
              Your Story Starts With Us.
            </h1>
            <h4>
              Every landing page needs a small description after the big bold
              title, that's why we added this text here. Add here all the
              information that can make you or your product create the first
              impression.
            </h4>
            <br>
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
            >
              <i class="fas fa-play" /> Watch video
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">
                Let's talk product
              </h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">
                    Free Chat
                  </h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">
                    Verified Users
                  </h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fingerprint</md-icon>
                  </div>
                  <h4 class="info-title">
                    Fingerprint
                  </h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">
            Here is our team
          </h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="cardProfile3.cardProfile1"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      Alec Thompson
                    </h4>
                    <h6 class="card-category text-muted">
                      Founder
                    </h6>
                    <p class="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth...
                    </p>
                  </template>
                  <template slot="cardAction">
                    <md-button
                      href="javascript:void(0)"
                      class="md-twitter md-just-icon md-simple"
                    >
                      <i class="fab fa-twitter" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-facebook md-just-icon md-simple"
                    >
                      <i class="fab fa-facebook" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-google md-just-icon md-simple"
                    >
                      <i class="fab fa-google" />
                    </md-button>
                  </template>
                </profile-card>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="cardProfile3.cardProfile2"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      Kendall Andrew
                    </h4>
                    <h6 class="card-category text-muted">
                      GRAPHIC DESIGNER
                    </h6>
                    <p class="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth...
                    </p>
                  </template>
                  <template slot="cardAction">
                    <md-button
                      href="javascript:void(0)"
                      class="md-linkedin md-just-icon md-simple"
                    >
                      <i class="fab fa-linkedin" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-facebook md-just-icon md-simple"
                    >
                      <i class="fab fa-facebook" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-dribbble md-just-icon md-simple"
                    >
                      <i class="fab fa-dribbble" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-google md-just-icon md-simple"
                    >
                      <i class="fab fa-google" />
                    </md-button>
                  </template>
                </profile-card>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="cardProfile3.cardProfile3"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      Gina Andrew
                    </h4>
                    <h6 class="card-category text-muted">
                      PHOTOGRAPHER
                    </h6>
                    <p class="card-description">
                      I love you like Kanye loves Kanye. Don't be scared of the
                      truth.
                    </p>
                  </template>
                  <template slot="cardAction">
                    <md-button
                      href="javascript:void(0)"
                      class="md-youtube md-just-icon md-simple"
                    >
                      <i class="fab fa-youtube" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-twitter md-just-icon md-simple"
                    >
                      <i class="fab fa-twitter" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-instagram md-just-icon md-simple"
                    >
                      <i class="fab fa-instagram" />
                    </md-button>
                  </template>
                </profile-card>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="cardProfile3.cardProfile4"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      George West
                    </h4>
                    <h6 class="card-category text-muted">
                      BACKEND HACKER
                    </h6>
                    <p class="card-description">
                      I love you like Kanye loves Kanye. Don't be scared of the
                      truth.
                    </p>
                  </template>
                  <template slot="cardAction">
                    <md-button
                      href="javascript:void(0)"
                      class="md-linkedin md-just-icon md-simple"
                    >
                      <i class="fab fa-linkedin" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-facebook md-just-icon md-simple"
                    >
                      <i class="fab fa-facebook" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-google md-just-icon md-simple"
                    >
                      <i class="fab fa-google" />
                    </md-button>
                  </template>
                </profile-card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="text-center title">
                Work with us
              </h2>
              <h4 class="text-center description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. We will responde get back to you in a
                couple of hours.
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 md-small-size-100">
                    <md-field>
                      <label>Your Name</label>
                      <md-input
                        v-model="name"
                        type="text"
                      />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50 md-small-size-100">
                    <md-field>
                      <label>Your Email</label>
                      <md-input
                        v-model="email"
                        type="email"
                      />
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message" />
                </md-field>
                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-33 md-small-size-100 mx-auto text-center"
                  >
                    <md-button class="md-success">
                      Send Message
                    </md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    ProfileCard
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "landing-page",
  data() {
    return {
      image: require("@/assets/img/bg7.jpg"),
      name: null,
      email: null,
      message: null,
      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/card-profile1-square.jpg"),
        cardProfile2: require("@/assets/img/faces/card-profile6-square.jpg"),
        cardProfile3: require("@/assets/img/faces/card-profile4-square.jpg"),
        cardProfile4: require("@/assets/img/faces/card-profile2-square.jpg")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
